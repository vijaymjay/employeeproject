import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'

export const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule',
  },
   
  
  // otherwise redirect to home
	{ path: '**', redirectTo: '/employee' }
  ];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
