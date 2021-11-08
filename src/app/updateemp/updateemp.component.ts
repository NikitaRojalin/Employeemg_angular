import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {
    userForm:FormGroup;
    id: number | undefined;
      employee!: Employee ;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
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
      this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }
  onSubmit(){

      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
      });

      if(this.userForm.valid){
         console.log(this.userForm.value)
        this.employeeService.updateEmployee(this.id,this.userForm.value).subscribe((data) => {
            this.toast.success("data successfully updated!!");
          this.router.navigate(["/employees"])
        })
      }


   }


}
