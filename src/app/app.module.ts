// Other people's stuff ---- dependencies
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {} from 'bootstrap-material-design';

import {
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatBadgeModule,
} from '@angular/material';

// Our stuff ---- ❤❤❤
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {ProfileComponent} from './pages/profile/profile.component';

import {ProductCardComponent} from './components/product-card/product-card.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';
import {NoAccessComponent} from './pages/no-access/no-access.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {environment} from 'src/environments/environment';
import {AuthService} from './services/login/auth.service';
import {FlashMessageService} from './services/flashMessage/flash-message.service';
import {ProductService} from './services/product/product.service';
import {SignupPageComponent} from './pages/signup-page/signup-page.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {OrderSummaryComponent} from './components/order-summary/order-summary.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ModifyProductComponent} from './components/modify-product/modify-product.component';
import {CategoryService} from './services/category/category.service';
import {ProductInfoComponent} from './components/product-info/product-info.component';
import {CouponsService} from './services/coupons/coupons.service';
import {FlexModule} from '@angular/flex-layout';
import {AdminCouponsComponent} from './admin/admin-coupons/admin-coupons.component';
import {CouponFormComponent} from './components/coupon-form/coupon-form.component';
import {CartService} from './services/cart/cart.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from './effects/products.effects';
import {cartReducer} from './reducers/products.reducers';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfileComponent,
    ProductCardComponent,
    NavBarComponent,
    LoginPageComponent,
    ShoppingCartComponent,
    CheckoutPageComponent,
    NoAccessComponent,
    PageNotFoundComponent,
    SignupPageComponent,
    ProductItemComponent,
    OrderSummaryComponent,
    AdminPageComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    CategoryFormComponent,
    ProductFormComponent,
    ModifyProductComponent,
    ProductInfoComponent,
    AdminCouponsComponent,
    CouponFormComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    ToastrModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    AngularFireAuthModule,
    // material design stuff
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    FlexModule,
    MatBadgeModule,
    StoreModule.forRoot({cart: cartReducer}),
    EffectsModule.forRoot([CartEffects])
  ],
  providers: [
    AuthService,
    FlashMessageService,
    ProductService,
    CategoryService,
    CouponsService,
    CartService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

