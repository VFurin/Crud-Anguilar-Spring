import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule )},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule )}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
