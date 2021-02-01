import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LabelComponent],
  exports: [LabelComponent],
})
export class UiModule {}
