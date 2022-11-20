import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PrizeCatalogComponent } from './prize-catalog/prize-catalog.component';
import { RegisterComponent } from './register/register.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { NotLoggedInGuard } from './services/not-logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: 'blog', component: BlogComponent, canActivate: [LoggedInGuard] },
  { path: 'catalog', component: PrizeCatalogComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
