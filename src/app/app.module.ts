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
import { RegulationsComponent } from './footer/info/regulations/regulations.component';
import { HelpComponent } from './footer/info/help/help.component';
import { ContactComponent } from './footer/info/contact/contact.component';
import { AuthorComponent } from './footer/author/author.component';
import { FaqComponent } from './footer/info/faq/faq.component';
import { SocialsBoxComponent } from './footer/socials-box/socials-box.component';
import { OrderNowComponent } from './order-now/order-now.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "promotional-sets", component: PromotionalSetsComponent },
  { path: "get-job", component: GetJobComponent },
  { path: "shopping-bin", component: ShoppingBinComponent },
  { path: "socials", component: SocialsComponent },
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
