import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateempComponent } from './createemp/createemp.component';
import { EmpdetComponent } from './empdet/empdet.component';
import { EmplistComponent } from './emplist/emplist.component';
import { SrchempComponent } from './srchemp/srchemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';

const routes: Routes = [
    {path: 'employees', component: EmplistComponent},
      {path: 'create-employee', component: CreateempComponent},
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
      {path: 'update-employee/:id', component: UpdateempComponent},
      {path: 'employee-details/:id', component: EmpdetComponent},
      {path:'search-employee/:id',component:SrchempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
