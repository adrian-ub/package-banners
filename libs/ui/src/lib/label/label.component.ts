import {
  Component,
  ChangeDetectionStrategy,
  Attribute,
  Input,
} from '@angular/core';

@Component({
  selector: 'ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() label!: string;

  constructor(@Attribute('for') public forLabel: string) {}
}
