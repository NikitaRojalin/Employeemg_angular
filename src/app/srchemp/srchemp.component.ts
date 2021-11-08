import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-srchemp',
  templateUrl: './srchemp.component.html',
  styleUrls: ['./srchemp.component.css']
})
export class SrchempComponent implements OnInit {
    id!: number;
employee:Array<Employee>=[];
  constructor(private route: Router,private router:ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
       this.id = this.router.snapshot.params['id'];
       this.getdata(this.id);
  }
getdata(id:number){
    this.employeeService.getEmployeeById(id).subscribe(data=>{
        this.employee=[data];
});}
employeeDetails(id: number){
  this.route.navigate(['employee-details', id]);
}

updateEmployee(id: number){
  this.route.navigate(['update-employee', id]);
}

deleteEmployee(id: number){
  this.employeeService.deleteEmployee(id).subscribe( data => {
    console.log(data);

})}
}
