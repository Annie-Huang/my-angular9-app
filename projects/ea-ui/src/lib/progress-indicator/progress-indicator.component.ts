import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'eui-progress-indicator',
    templateUrl: './progress-indicator.component.html',
    styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
    @Input() currentStep: number;
    @Input() numberOfSteps: number;

    totalSteps = [];

    ngOnInit() {
        this.totalSteps = new Array(this.numberOfSteps);
    }
}
