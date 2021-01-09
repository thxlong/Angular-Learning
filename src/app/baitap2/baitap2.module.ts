import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ItemComponent } from './item/item.component';
import { Baitap2Component } from './baitap2.component';
import { IndexContentComponent } from './index-content/index-content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    SliderComponent,
    ItemComponent,
    Baitap2Component,
    IndexContentComponent,
  ],
  imports: [CommonModule],

  exports: [Baitap2Component],
})
export class Baitap2Module {}
