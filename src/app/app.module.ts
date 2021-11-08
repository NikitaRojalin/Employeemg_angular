import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateempComponent } from './createemp/createemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetComponent } from './empdet/empdet.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SrchempComponent } from './srchemp/srchemp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    CreateempComponent,
    UpdateempComponent,
    EmplistComponent,
    EmpdetComponent,
    SrchempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
