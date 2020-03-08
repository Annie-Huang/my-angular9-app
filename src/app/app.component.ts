import { Component } from '@angular/core';
import { MessageService } from '@ea/ea-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep = 3;
  numberOfSteps = 5;

  constructor(private readonly messageService: MessageService) {}

  showMessage(severity: string) {
    this.messageService.add({ severity, detail: `this is a ${severity} message.`, position: 'message-custom-location' });
  }

  hideMessage() {
    this.messageService.clear();
  }
}
