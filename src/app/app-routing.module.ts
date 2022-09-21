import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './component/student-login/student-login.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path: 'student-login', component :StudentLoginComponent},
  {path: 'student-dashboard', component: StudentDashboardComponent},
  {path: 'create-student', component :CreateStudentComponent},
  {path: 'loginpage', component: LoginpageComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
