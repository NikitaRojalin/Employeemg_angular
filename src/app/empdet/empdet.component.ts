import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute ,Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-empdet',
  templateUrl: './empdet.component.html',
  styleUrls: ['./empdet.component.css']
})
export class EmpdetComponent implements OnInit {
    id!: number;
 employee: Employee={id:-1,firstName:"",lastName:"",emailId:"",designation:"",phoneno:""};
  constructor(private route: ActivatedRoute,private router:Router, private employeService: EmployeeService) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
backtolist(){
    this.router.navigate(['employees']);
}
}
