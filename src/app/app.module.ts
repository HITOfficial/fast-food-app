import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GetJobComponent } from './get-job/get-job.component';
import { PromotionalSetsComponent } from './promotional-sets/promotional-sets.component';
import { ShoppingBinComponent } from './shopping-bin/shopping-bin.component';
import { SocialsComponent } from './socials/socials.component';
import { NewsComponent } from './home/news/news.component';
import { BoxesComponent } from './home/boxes/boxes.component';
import { BoxComponent } from './home/boxes/box/box.component';
import { FooterComponent } from './footer/footer.component';
import { TrademarkWarningNoticeComponent } from './footer/trademark-warning-notice/trademark-warning-notice.component';
import { InfoComponent } from './footer/info/info.component';
import { SocialsBoxComponent } from './footer/socials-box/socials-box.component';
import { AuthorComponent } from './footer/author/author.component';
import { HelpComponent } from './help/help.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { SliderComponent } from './home/news/slider/slider.component';
import { ChangeSliderComponent } from './home/news/change-slider/change-slider.component';
import { SliderBarComponent } from './home/news/slider/slider-bar/slider-bar.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "promotional-sets", component: PromotionalSetsComponent },
  { path: "get-job", component: GetJobComponent },
  { path: "shopping-bin", component: ShoppingBinComponent },
  { path: "socials", component: SocialsComponent },
  { path: "order-now", component: OrderNowComponent },
  { path: "contact", component: ContactComponent },
  { path: "help", component: HelpComponent },
  { path: "regulations", component: RegulationsComponent },
  { path: "faq", component: FaqComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    GetJobComponent,
    PromotionalSetsComponent,
    ShoppingBinComponent,
    SocialsComponent,
    NewsComponent,
    BoxesComponent,
    BoxComponent,
    FooterComponent,
    TrademarkWarningNoticeComponent,
    InfoComponent,
    RegulationsComponent,
    HelpComponent,
    ContactComponent,
    AuthorComponent,
    FaqComponent,
    SocialsBoxComponent,
    OrderNowComponent,
    SliderComponent,
    ChangeSliderComponent,
    SliderBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
