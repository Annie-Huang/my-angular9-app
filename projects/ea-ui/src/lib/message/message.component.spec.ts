import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

describe('MessageComponent', () => {
    let component: MessageComponent;
    let fixture: ComponentFixture<MessageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessageComponent],
            providers: [MessageService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should check for messages', () => {
        const messagePool = [];
        const message = {
            severity: 'error',
            details: 'this is my message'
        };
        messagePool.push(message);
        component.value = messagePool;
        const hasMessage = component.hasMessages();
        expect(hasMessage).toBeTruthy();
    });

    it('should get sererity error', () => {
        const messagePool = [];
        const message = {
            severity: 'error',
            details: 'this is my message'
        };
        messagePool.push(message);
        component.value = messagePool;
        const severityClass = component.getSeverityClass();
        expect(severityClass).toEqual('error');
    });

    it('should delete the message', () => {
        const event = { preventDefault: jasmine.createSpy() };
        const messagePool = [];
        const message = {
            severity: 'error',
            details: 'this is my message'
        };
        messagePool.push(message);
        component.value = messagePool;
        component.clear(event);
        expect(component.value).toEqual([]);
    });
});
