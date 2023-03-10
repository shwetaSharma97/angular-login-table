import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './core/component/data-table/data-table.component';
import { LoginPageComponent } from './core/component/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'data-table',
    component: DataTableComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
