import { UserupdateComponent } from './userupdate/userupdate.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { SucesspageComponent } from './sucesspage/sucesspage.component';
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'createAccount',component:UserRegistrationComponent},
  {path:'userLogin',component:UserLoginComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'userHome',component:HomepageComponent},
  {path:'updateUser/:id',component:UserupdateComponent},
  {path: 'userProfile',component:ProfileComponent},
  {path: 'paymentGateway',component:PaymentpageComponent},
  {path: 'orders',component:OrderpageComponent},
  {path: 'sucess',component:SucesspageComponent},
  {path:'cart',component:CartpageComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
