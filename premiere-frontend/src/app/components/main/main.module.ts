import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {NavbarComponent} from './navbar/navbar.component';
import {BodyMainCinemaListComponent} from './body-main-cinema-list/body-main-cinema-list.component';
import {FooterMainComponent} from './footer-main/footer-main.component';
import {HeaderMainSliderComponent} from "./header-main-slider/header-main-slider.component";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderMainSliderComponent,
    BodyMainCinemaListComponent,
    FooterMainComponent
  ],
  exports: [
    NavbarComponent,
    FooterMainComponent,
    HeaderMainSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule
  ]
})
export class MainModule {
}
