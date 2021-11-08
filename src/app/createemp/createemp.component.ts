import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {
    userForm:FormGroup;

    employee: Employee={id:-1,firstName:"",lastName:"",emailId:"",designation:"",phoneno:""};
  constructor(private employeeService: EmployeeService,
    private router: Router,private toast:ToastrService) {
        this.userForm = new FormGroup({
              'firstName': new FormControl('', Validators.required),
              'lastName': new FormControl('', Validators.required),
              'emailId': new FormControl('', [Validators.required, Validators.email]),
              'designation': new FormControl('', Validators.required),
              'phoneno': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),


        })
    }

  ngOnInit(): void {
  }
  saveEmployee(){
      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });

      if(this.userForm.valid){
        console.log(this.userForm.value);
        this.employeeService.createEmployee(this.userForm.value).subscribe(() => {
            this.toast.success("employee successfully created!!");
          this.router.navigate(['/employees'])
        },() => {
          alert("Something Went Wrong")
        })
    }

   }



   onSubmit(){
     console.log(this.employee);
     this.saveEmployee();
   }
}
