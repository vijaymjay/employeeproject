import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../material.module';
import { employeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule }    from '@angular/forms';
import { EmployeecreationComponent } from './employeecreation/employeecreation.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    employeeRoutingModule,
    CustomMaterialModule

  ],
  declarations: [EmployeecreationComponent, EmployeelistComponent]
})
export class EmployeeModule { }
