import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {HomeComponent} from './components/home/home.component';
import {PreparedPizzaComponent} from "./components/prepared-pizza/prepared-pizza.component";
import {CustomizedPizzaComponent} from "./components/customized-pizza/customized-pizza.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {DeliveryAddressComponent} from "./components/payment/delivery-address/delivery-address.component";
import {BankTransferInformationComponent} from "./components/payment/bank-transfer-information/bank-transfer-information.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'prepared', component: PreparedPizzaComponent},
  {path:'customized', component: CustomizedPizzaComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/deliveryaddress', component: DeliveryAddressComponent},
  {path: 'payment/bank-transfer-information', component: BankTransferInformationComponent},
  {path: '**', component: HomeComponent},
  {path: "", component: HomeComponent},

];
@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
