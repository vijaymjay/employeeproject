import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { FormGroup, FormArray } from '@angular/forms';
import { EmployeeService } from '@app/employee/employee.service';
import { Subscription} from 'rxjs';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-employeecreation',
  templateUrl: './employeecreation.component.html',
  styleUrls: ['./employeecreation.component.css']
})
export class EmployeecreationComponent implements OnInit {

  constructor(	private fb: FormBuilder,private router: Router,private employeeservice: EmployeeService,private activatedRoute: ActivatedRoute) { }

  
  addresses : FormArray;
  employeesubscription$ :Subscription;
  editempsubscription$:Subscription;
  empObservable:any;
  isSubmitted = false;
  employeeheading;
  employeebutton;
  empid;
  skillset : any = ['HTML','CSS','PHP','Javascript','NodeJs','Angular']

  department : any = ['HR','Accounts','Purchase','IT']

  role : any = ['Manager','HR','Software Developer','Senior Software Developer','Graphical Designer','Team Leader']

   employeeForm: FormGroup = this.fb.group({
    employeeName: ['', Validators.required],
   // mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.maxLength(10)]],
   employeeid: ['', [Validators.required, Validators.maxLength(20)]],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    role:['', Validators.required],
    department:['', Validators.required],
    skillset:['', Validators.required],
    dateofbirth:['', Validators.required],
    dateofjoining:['', Validators.required],
    status:''
  });
  
  ngOnInit() {
      const empid = this.activatedRoute.snapshot.paramMap.get('id');

      if(empid == undefined){
        this.employeeheading = 'Add Employee';
        this.employeebutton = "Submit";
        this.empid = '';
      }
      else {
        this.employeeheading = 'Edit Employee';
        this.employeebutton = "Update";
        this.empid = empid;
        this.editempsubscription$ =  this.employeeservice.editemployee(this.empid).subscribe((obj)=>{
          if(obj.status=="success"){
            
            this.employeeForm.patchValue({
              employeeName: obj.data.employeeName,
              employeeid: obj.data.employeeid,
              street:obj.data.street,
              city:obj.data.city,
              state:obj.data.state,
              zip:obj.data.zip,
              role:obj.data.role,
              department:obj.data.department,
              skillset:obj.data.skillset,
              dateofbirth:obj.data.dateofbirth,
              dateofjoining:obj.data.dateofjoining,
              status:obj.data.status
            });
          }
        },
        error =>{
            console.log('error')
        })
      }
  }

  
  changeRole(e) {
    this.role.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeDepartment(e) {
    this.department.setValue(e.target.value, {
      onlySelf: true
    })
  }

  
  changeSkill(e) {
    this.skillset.setValue(e.target.value, {
      onlySelf: true
    })
  }
  
  onSubmitemployee(){

    this.isSubmitted = true;

    if(this.employeeForm.valid == true){
        let employeeobj = {
          employeeName : this.employeeForm.get('employeeName').value,
          employeeid: this.employeeForm.get('employeeid').value,
          street:this.employeeForm.get('street').value,
          city:this.employeeForm.get('city').value,
          state:this.employeeForm.get('state').value,
          zip:this.employeeForm.get('zip').value,
          role:this.employeeForm.get('role').value,
          department:this.employeeForm.get('department').value,
          skillset:this.employeeForm.get('skillset').value,
          dateofbirth:this.employeeForm.get('dateofbirth').value,
          dateofjoining:this.employeeForm.get('dateofjoining').value,
          status:this.employeeForm.get('status').value,
        }
        

        if(this.empid == ''){
          this.empObservable = this.employeeservice.storeemployee(employeeobj);
        }
        else {
          this.empObservable = this.employeeservice.updateemployee(this.empid,employeeobj);
        }

        this.employeesubscription$ =  this.empObservable.subscribe((obj)=>{
            if(obj.status=="success"){
              this.router.navigate(['/employee']);
              alert(obj.message)
            }
        },
        error =>{
            console.log('error')
        })
    }
    else {
      return;
    }
  }

  cancelemployee(){
    this.router.navigate(['/employee']);
  }


  ngOnDestroy(){
    
  }

}
