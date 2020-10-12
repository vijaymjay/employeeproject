import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  storeemployee(employeedata){
    return this.http.post<any>(`${environment.apiUrl}`+'/employee/ajax/save',employeedata);
  }

  employeelist(){
    return this.http.get<any>(`${environment.apiUrl}`+'/employee/ajax/list');
  }

  editemployee(empid:any){
    return this.http.get<any>(`${environment.apiUrl}`+'/employee/edit/'+empid);
  }

  updateemployee(empid:any,employeedata:object){
    return this.http.post<any>(`${environment.apiUrl}`+'/employee/update/'+empid,employeedata);
  }


  deleteemployee(empid:any){
    return this.http.get<any>(`${environment.apiUrl}`+'/employee/delete/'+empid);
  }

  
}
