import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addempolyee',
  templateUrl: './addempolyee.component.html',
  styleUrls: ['./addempolyee.component.css']
})
export class AddempolyeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }


  public onAddEmloyee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.router.navigateByUrl("/employee");
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }

    );
  }


}
