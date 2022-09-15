import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SqureComponent } from './squre/squre.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrarionComponent } from './registrarion/registrarion.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { EmpComponent } from './emp/emp.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import {HttpClientModule} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DenoComponent } from './deno/deno.component';
import { DemoComponent } from './demo/demo.component';
import { ItemComponent } from './item/item.component';
import { TypiComponent } from './typi/typi.component';
import { TodoComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { IdcardComponent } from './idcard/idcard.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    SqureComponent,
    CalculatorComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    SquareComponent,
    RectangleComponent,
    RegistrarionComponent,
    StudentRegistrationComponent,
    CartComponent,
    EmpComponent,
    PipesComponent,
    PricePipe,
    CarsComponent,
    GpayComponent,
    VehicleComponent,
    DenoComponent,
    DemoComponent,
    ItemComponent,
    TypiComponent,
    TodoComponent,
    UserComponent,
    IdcardComponent,
    CreateVehicleComponent,
    CreateUserComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
