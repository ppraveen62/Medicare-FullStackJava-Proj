import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomepageComponent } from './homepage/homepage.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { MedicineProductComponent } from './medicine-product/medicine-product.component';
import { PersonalcareProductComponent } from './personalcare-product/personalcare-product.component';
import { BabycareProductComponent } from './babycare-product/babycare-product.component';
import { VitaminsProductComponent } from './vitamins-product/vitamins-product.component';
import { HealthProductComponent } from './health-product/health-product.component';
import { ProfileComponent } from './profile/profile.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { SucesspageComponent } from './sucesspage/sucesspage.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddProductComponent,
    UpdateProductComponent,
    AdminHomeComponent,
    HomepageComponent,
    AllProductsComponent,
    MedicineProductComponent,
    PersonalcareProductComponent,
    BabycareProductComponent,
    VitaminsProductComponent,
    HealthProductComponent,
    ProfileComponent,
    UserupdateComponent,
    CartpageComponent,
    PaymentpageComponent,
    OrderpageComponent,
    SucesspageComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
