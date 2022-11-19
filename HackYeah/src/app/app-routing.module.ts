import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { NotLoggedInGuard } from './services/not-logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
