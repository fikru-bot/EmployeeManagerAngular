import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { FormsModule } from '@angular/forms';
import { AddempolyeeComponent } from './components/addempolyee/addempolyee.component';
import { RouterModule, Routes } from '@angular/router';

const routers: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'addemployee', component: AddempolyeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddempolyeeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routers)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
