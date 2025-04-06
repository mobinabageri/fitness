import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TriningComponent } from './trining/trining.component';
import { AuthGuard, permissionService } from './auth/auth.guard';

const routes: Routes = [
{path:'',component:WelcomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'trining',component:TriningComponent, canActivate:[AuthGuard]},



];
@Injectable()
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[permissionService]
})
export class AppRoutingModule { }
