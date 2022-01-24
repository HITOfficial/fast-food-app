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
import { SliderTextComponent } from './home/news/slider-text/slider-text.component';
import { SeparatorComponent } from './home/separator/separator.component';
import { SliderListComponent } from './home/news/slider-list/slider-list.component';
import { SliderElementComponent } from './home/news/slider-list/slider-element/slider-element.component';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component';
import { MenuHeaderComponent } from './menu/menu-categories/menu-header/menu-header.component';
import { MenuHeaderElementComponent } from './menu/menu-categories/menu-header/menu-header-element/menu-header-element.component';
import { MenuProductsComponent } from './menu/menu-products/menu-products.component';
import { ProductBoxComponent } from './menu/menu-products/product-box/product-box.component';
import { ProductIncrementComponent } from './menu/menu-products/product-box/product-increment/product-increment.component';
import { ProductReduceComponent } from './menu/menu-products/product-box/product-reduce/product-reduce.component';
import { ProductResetComponent } from './menu/menu-products/product-box/product-reset/product-reset.component';
import { MenuService } from './services/menu.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { MapLocationComponent } from './contact/map-location/map-location.component';
import { ProductDetailsComponent } from './menu/menu-products/product-box/product-details/product-details.component';
import { ProductOpinionsComponent } from './menu/menu-products/product-box/product-details/product-opinions/product-opinions.component';
import { ProductRemoveComponent } from './menu/menu-products/product-box/product-remove/product-remove.component';
import { UserOpinionsComponent } from './menu/menu-products/product-box/product-details/product-opinions/user-opinions/user-opinions.component';
import { UserOpinionComponent } from './menu/menu-products/product-box/product-details/product-opinions/user-opinions/user-opinion/user-opinion.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


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
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin-panel", component: AdminPanelComponent }
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
    SliderTextComponent,
    SeparatorComponent,
    SliderListComponent,
    SliderElementComponent,
    MenuCategoriesComponent,
    MenuHeaderComponent,
    MenuHeaderElementComponent,
    MenuProductsComponent,
    ProductBoxComponent,
    ProductIncrementComponent,
    ProductReduceComponent,
    ProductResetComponent,
    MapLocationComponent,
    ProductDetailsComponent,
    ProductOpinionsComponent,
    ProductRemoveComponent,
    UserOpinionsComponent,
    UserOpinionComponent,
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],

  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
