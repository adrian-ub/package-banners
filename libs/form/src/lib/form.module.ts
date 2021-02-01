import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PreviewImageModule } from '@adrianub/preview-image';
import { UiModule } from '@adrianub/ui';

import { FormComponent } from './form/form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PreviewImageModule, UiModule],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
