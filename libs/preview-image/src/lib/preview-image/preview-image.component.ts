import { Clipboard } from '@angular/cdk/clipboard';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'adrianub-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewImageComponent {
  _url = '';
  loading = true;
  isCopied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private clipboard: Clipboard) {}

  @Input() set url(url: string) {
    this._url = url;
    this.loading = true;
  }

  imageLoaded() {
    this.loading = false;
  }

  copyClipboard() {
    this.clipboard.copy(this._url);
    this.isCopied.next(true);

    of(true)
      .pipe(delay(3000))
      .subscribe(() => this.closeNotification());
  }

  closeNotification() {
    this.isCopied.next(false);
  }
}
