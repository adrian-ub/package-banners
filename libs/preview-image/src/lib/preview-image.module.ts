import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PreviewImageComponent } from './preview-image/preview-image.component';

@NgModule({
  imports: [CommonModule, ClipboardModule],
  declarations: [PreviewImageComponent],
  exports: [PreviewImageComponent],
})
export class PreviewImageModule {}
