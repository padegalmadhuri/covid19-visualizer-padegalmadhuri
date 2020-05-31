import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { JwtService } from './jwt.service';
import { DashboardComponent } from './dashboard/dashboard.component'
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './barchart/barchart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import { StatedataComponent } from './statedata/statedata.component';
import { RadarComponent } from './radar/radar.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BarchartComponent,
    LineChartComponent,
    StatedataComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot( {timeOut: 2000})
    //FontAwesomeModule,

    // ToastrModule.forRoot({ positionClass: 'inline' }),
    // BrowserAnimationsModule,

  ],
  providers: [JwtService,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
