import { NgModule } from '@angular/core';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ProgressIndicatorComponent],
    declarations: [ProgressIndicatorComponent]
})
export class ProgressIndicatorModule {}
