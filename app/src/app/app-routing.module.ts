import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ChildComponent } from './child/child.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DemoComponent } from './demo/demo.component';
import { EmpComponent } from './emp/emp.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { IdcardComponent } from './idcard/idcard.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistrarionComponent } from './registrarion/registrarion.component';
import { SquareComponent } from './square/square.component';
import { SqureComponent } from './squre/squre.component';
import { StarComponent } from './star/star.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TodoComponent } from './todos/todos.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypiComponent } from './typi/typi.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'squre', component: SqureComponent },
      { path: 'gpay', component: GpayComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'two-way-binding', component: TwoWayBindingComponent },
      { path: 'typi', component: TypiComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'registrarion', component: RegistrarionComponent },
      { path: 'student-registration', component: StudentRegistrationComponent },
      { path: 'cart', component: CartComponent },
      { path: 'emp', component: EmpComponent },
      { path: 'cars', component: CarsComponent },
      {path: 'star', component: StarComponent},
      {path: 'vehicle-details/:id', component:VehicleDetailsComponent},
      
        {path: 'create-vehicle',
        component: CreateVehicleComponent,
        canDeactivate: [NotifyGuard],
      },
      { path: 'demo', component: DemoComponent },
      { path: 'item', component: ItemComponent },
      { path: 'todos', component: TodoComponent },
      { path: 'idcard', component: IdcardComponent },
      { path: 'create-user', component: CreateUserComponent },
      {path: 'parent', component: ParentComponent},
      {path: 'child', component: ChildComponent},
      {path: 'cartlist', component: CartlistComponent},
      {path: 'product', component: ProductComponent},
      {path: 'nav', component: NavComponent}
    ],
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
},)
export class AppRoutingModule { }
