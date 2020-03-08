import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';
import { CommonModule } from '@angular/common';
import { NgModule, Component, ViewChild } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [MessageComponent],
    entryComponents: [MessageComponent]
})
export class FakeTestMessageModule {}

@Component({
    template: `
        <div>
            <div class="online"></div>
            <div class="message-placeholder"></div>
        </div>
    `
})
class MessageTransclusionComponent {}

describe('MessageService', () => {
    let service: MessageService;
    let fixture: ComponentFixture<MessageTransclusionComponent>;
    let component: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MessageTransclusionComponent],
            imports: [FakeTestMessageModule],
            providers: [MessageService]
        });

        service = TestBed.get(MessageService);
        fixture = TestBed.createComponent(MessageTransclusionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should inject and remove the message component', () => {
        service.add({ severity: 'error', detail: 'mymessage' });
        expect(service.messageComponentRef.hostView.destroyed).toBeFalsy();
        service.clear();
        fixture.detectChanges();
        expect(service.messageComponentRef.hostView.destroyed).toBeTruthy();
    });

    it('should inject and remove the message component', () => {
        service.add({ severity: 'error', detail: 'mymessage' });
        expect(service.messageComponentRef.hostView.destroyed).toBeFalsy();
        service.clear();
        fixture.detectChanges();
        expect(service.messageComponentRef.hostView.destroyed).toBeTruthy();
    });

    it('should inject the component to a specific postion', () => {
        let position = service.getMessageLocation('online');
        expect(position).toEqual({ class: 'online', index: 0 });
        position = service.getMessageLocation('');
        expect(position).toEqual({ class: 'message-placeholder', index: 0 });
    });

    describe('dispatchWarning', () => {
        it('should add the warning message', () => {
            const message = 'Warning, please try again';
            spyOn(service, 'add').and.stub();
            service.dispatchWarning(message);
            expect(service.add).toHaveBeenCalledWith({ severity: 'warning', detail: message, position: 'message-placeholder' });
        });
    });

    describe('dispatchError', () => {
        it('should add the error message', () => {
            const message = 'Sorry, please try again';
            spyOn(service, 'add').and.stub();
            service.dispatchError(message);
            expect(service.add).toHaveBeenCalledWith({ severity: 'error', detail: message, position: 'message-placeholder' });
        });
    });

    describe('dispatchErrorOnModal', () => {
        it('should add the error message on model header', () => {
            const message = 'Sorry, please try again';
            spyOn(service, 'add').and.stub();
            service.dispatchErrorOnModal(message);
            expect(service.add).toHaveBeenCalledWith({ severity: 'error', detail: message, position: '' });
        });
    });

    describe('clearMessage', () => {
        it('should clear the error message', () => {
            spyOn(service, 'clear').and.stub();
            service.clearMessage();
            expect(service.clear).toHaveBeenCalled();
        });
    });
});

@Component({
    template: `
        <div style="display: block">
            <div class="ea-modal"></div>
        </div>
    `
})
class EAModalMessageTransclusionComponent {}

describe('MessageService', () => {
    let service: MessageService;
    let fixture: ComponentFixture<EAModalMessageTransclusionComponent>;
    let component: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EAModalMessageTransclusionComponent],
            imports: [FakeTestMessageModule],
            providers: [MessageService]
        });

        service = TestBed.get(MessageService);
        fixture = TestBed.createComponent(EAModalMessageTransclusionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should inject the component to a specific postion for ea-modal', () => {
        const position = service.getMessageLocation(null);
        expect(position).toEqual({ class: 'ea-modal__message', index: 0 });
    });
});
