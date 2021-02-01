import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'adrianub-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
