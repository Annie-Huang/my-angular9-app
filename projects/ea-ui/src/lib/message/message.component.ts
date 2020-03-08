import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';
import { Message } from './message.interface';

export enum Severity {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning'
}

@Component({
    selector: 'eui-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    animations: [
        trigger('messageAnimation', [
            state(
                'visible',
                style({
                    transform: 'translateY(0)',
                    opacity: 1
                })
            ),
            transition('void => *', [style({ transform: 'translateY(-25%)', opacity: 0 }), animate('{{showTransitionParams}}')]),
            transition('* => void', [
                animate(
                    '{{hideTransitionParams}}',
                    style({
                        opacity: 0,
                        transform: 'translateY(-25%)'
                    })
                )
            ])
        ])
    ]
})
export class MessageComponent implements OnInit, OnDestroy {
    value: Message[];

    @Input() key: string;

    @Output() valueChange: EventEmitter<Message[]> = new EventEmitter<Message[]>();

    showTransitionOptions = '300ms ease-out';

    hideTransitionOptions = '250ms ease-in';

    messageSubscription: Subscription;

    clearSubscription: Subscription;

    constructor(public messageService: MessageService) {}

    ngOnInit(): void {
        this.messageSubscription = this.messageService.messageObserver.subscribe((messages: any) => {
            if (!messages) {
                return;
            }

            if (messages instanceof Array) {
                const filteredMessages = messages.filter(m => this.key === m.key);
                this.value = this.value ? [...this.value, ...filteredMessages] : [...filteredMessages];
            } else if (this.key === messages.key) {
                this.value = this.value ? [...this.value, ...[messages]] : [messages];
            }
        });

        this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
            if ((key && this.key === key) || !key) {
                this.value = null;
            }
        });
    }

    hasMessages(): boolean {
        return this.value && this.value.length > 0;
    }

    getSeverityClass(): string {
        return this.value[0].severity;
    }

    isSuccess(): boolean {
        return this.value[0].severity === Severity.SUCCESS;
    }

    isError(): boolean {
        return this.value[0].severity === Severity.ERROR;
    }

    isWarning(): boolean {
        return this.value[0].severity === Severity.WARNING;
    }

    clear(event): void {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    }

    ngOnDestroy(): void {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }

        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    }
}
