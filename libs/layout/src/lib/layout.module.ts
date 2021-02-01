import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent,
    HeroComponent,
    FooterComponent,
  ],
  exports: [DefaultLayoutComponent],
})
export class LayoutModule {}
