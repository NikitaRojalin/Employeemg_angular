import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
    idsrch!: number;
    employees: Employee[] = [];
    page = 1;

  pageSize =5;
  pageSizes = [5, 7, 9];
  constructor(private employeeService: EmployeeService,
    private router: Router,private toast:ToastrService) { }

  ngOnInit(): void {
      this.getEmployees();
  }
  getRequestParams( page: number, pageSize: number): any {
    let params: any = {};


    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  private getEmployees(){


      this.employeeService.getEmployeesList().subscribe(data => {
        this.employees = data;
      });
    }

    employeeDetails(id: number){
      this.router.navigate(['employee-details', id]);
    }

    updateEmployee(id: number){
      this.router.navigate(['update-employee', id]);
    }

    deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe( data => {
        console.log(data);
        this.toast.success("data successfully deleted!!");
        this.getEmployees();
    })}
searchEmployee(id:number){
    this.router.navigate(['search-employee', id]);


}
}
