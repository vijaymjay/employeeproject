import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeecreationComponent } from '@app/employee/employeecreation/employeecreation.component';
import { EmployeelistComponent } from '@app/employee/employeelist/employeelist.component';

const routes: Routes = [
  { path: '', component:EmployeelistComponent  },
  { path: 'create', component:EmployeecreationComponent  },
  { path: 'edit/:id', component:EmployeecreationComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class employeeRoutingModule { }
