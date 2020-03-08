import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message, MessagePosition } from './message.interface';
import { MessageComponent } from './message.component';

@Injectable()
export class MessageService {
    messageComponentRef: ComponentRef<MessageComponent>;

    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly appRef: ApplicationRef,
        private readonly injector: Injector
    ) {}

    private readonly messageSource = new BehaviorSubject<Message | Message[]>(null);
    private readonly clearSource = new Subject<string>();

    messageObserver = this.messageSource.asObservable();
    clearObserver = this.clearSource.asObservable();

    dispatchErrorOnModal(detail: string): void {
        this.dispatchError(detail, '');
    }

    dispatchError(detail: string, position?: string): void {
        this.dispatch('error', detail, position);
    }

    dispatchWarning(detail: string, position?: string): void {
        this.dispatch('warning', detail, position);
    }

    private dispatch(severity: string, detail: string, position = 'message-placeholder'): void {
        const message: Message = { severity, detail, position };
        this.add(message);
    }

    clearMessage(): void {
        this.clear();
    }

    add(message: Message) {
        this.removeComponentFromBody();
        if (message) {
            this.messageSource.next(message);
            this.appendComponentToBody(this.getMessageLocation(message.position));
        }
    }

    clear(key?: string) {
        this.removeComponentFromBody();
        this.clearSource.next(key || null);
    }

    appendComponentToBody(position: MessagePosition) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
        const componentRef = componentFactory.create(this.injector);
        this.appRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.getElementsByClassName(position.class)[position.index].appendChild(domElem);
        this.messageComponentRef = componentRef;
    }

    removeComponentFromBody() {
        if (this.messageComponentRef) {
            this.appRef.detachView(this.messageComponentRef.hostView);
            this.messageComponentRef.destroy();
        }
    }

    getMessageLocation(position: string): MessagePosition {
        const modalIndex = Array.from(document.getElementsByClassName('ea-modal')).findIndex(
            e => e.parentElement.style.display === 'block'
        );
        if (position) {
            return {
                class: position,
                index: 0
            };
        } else if (modalIndex > -1) {
            return {
                class: 'ea-modal__message',
                index: Number(modalIndex)
            };
        } else {
            return {
                class: 'message-placeholder',
                index: 0
            };
        }
    }
}
