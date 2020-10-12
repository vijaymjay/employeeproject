import { Component, OnInit,Inject } from '@angular/core';
import { EmployeeService } from '@app/employee/employee.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  listsubscription$:Subscription;
  
  dataSource : any;
  displayedColumns: string[] = ['employeeName', 'employeeid', 'role', 'department','skillset','dateofbirth','dateofjoining','_id'];

  constructor(private employeeservice: EmployeeService,private router: Router) { }

  ngOnInit() {
      this.listsubscription$ =  this.employeeservice.employeelist().subscribe((obj)=>{
          if(obj.status=="success"){
            this.dataSource = obj.data;
          }
      },
      error =>{
        this.dataSource = [];
          console.log('error')
      })
  }

  addEmployee(){
    this.router.navigate(['/employee/create']);
  }

  editemployee(empid:any){
    this.router.navigate(['/employee/edit/'+empid]);
  }

  deleteemployee(empid:any){
    this.employeeservice.deleteemployee(empid).subscribe((obj)=>{
      if(obj.status == "success"){
        alert(obj.message);
        window.location.reload();
      }
    },
    error =>{
      console.log('error')
    })

  }





  ngOnDestroy(){
    this.listsubscription$.unsubscribe();
  }

}

