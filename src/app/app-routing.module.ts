import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
},
{
    path: 'auth',
    component: AuthComponent,
},
{
    path: 'auth/:id',
    component: AuthComponent,
},
{
    path: 'login',
    component: AuthComponent,
},
{
  path: '',
  component: LayoutComponent,
  children: [
      {
          path: 'dashboard',
          component: DashboardComponent
      },
      {
          path: 'dashboard/:id',
          component: DashboardComponent
      },
  ]
},
{ path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
