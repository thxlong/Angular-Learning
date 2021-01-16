import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
// import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';

import { Baitap4Module } from './baitap4/baitap4.module';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
@NgModule({
  // ! declarations là nơi khai báo các component được quản lí bởi module
  // app component đang được AppModule quản lý
  // HomeModule: HeaderCOmponent, FooterComponent, ContentComponent
  // => Để sử dụng các Component của HomeModule trong AppModule cần phải gắn HomeModule vào trong imports
  // Những module do anglar cung cấp sẵn: RouterModule, FormModule, HttpClientModule
  declarations: [
    AppComponent,
    DemoComponent,
    // DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
  ],

  // ! sau khi import ở trên thì cần tiếp tục imports ở dưới
  imports: [BrowserModule, Baitap2Module, ComponentsModule, DirectivesModule],
  // providers là nơi khai báo các service
  providers: [],

  // bootstrap là khai báo AppComponent là component khởi chạy đầu tiên của module
  bootstrap: [AppComponent],
})
export class AppModule {}
