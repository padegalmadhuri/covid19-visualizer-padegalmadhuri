import { Component, OnInit ,ViewChild} from '@angular/core';
import { JwtService } from '../jwt.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
//import { BarChartComponent } from '../barchart/barchart.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// @ViewChild('childOne') childChart: BarChartComponent;
  constructor(private auth:JwtService,http:HttpClient,private router:Router,private route: ActivatedRoute,private toastr:ToastrService) {
    this.getData();
    //this.getApiData();
    this.loadCountryData();
    }
  userdata;
  apiData;
  data;
  filteredData ;
  ngOnInit(): void {
  }
  logout()
  {
    this.auth.logout();
    this.toastr.info("Logout")
  }
  getData()
  {

    this.auth.getData().subscribe(data=>{
      this.userdata=Array.of(data);
      console.log(this.userdata);
      console.log(typeof(this.userdata[0].confirmed.value));
      });
  }
  // getApiData(){
  //   this.auth.getApiData().subscribe(data=>{
  //     this.apiData=data.state;
  //     //delete this.apiData.splice(-1,1)
  //     console.log(this.apiData);
  //     console.log(this.apiData[0]);
  //     this.apiData.splice(-1,1)
  //   })
  //   //console.log(apiData[0][1].name)
  // }
  // getDistrictData(){
  //   this.auth.getDistrictData().subscribe(data=>{
  //     console.log(data[1].districtData);
  //   })
  // }


  filter() {
    let filterVal = (<HTMLInputElement>document.getElementById('search')).value;
    if (!filterVal) {
      this.filteredData = this.data['statewise'];
      return;
    }
    let regex = new RegExp('^' + filterVal, 'i');
    this.filteredData = this.data['statewise'].filter((state) => {
      return regex.test(state['state']);
    });
  }

  loadCountryData() {
    this.auth.getCountryData().subscribe(
      (responce) => {
        console.log(responce);
        this.data = responce;
        this.filteredData = this.data['statewise'];
        //this.statewiseChart.updateChart(this.data['statewise'], 'country');
        // this.countryTotalChart.updateChart(
        //   this.data['statewise'],
        //   'countryTotal'
        // );
        // this.countryTrendChart.updateChart(
        //   this.data['cases_time_series'],
        //   'countryTrend'
        // );
      },
      (error) => {
        this.toastr.error('Network Error!');
        console.log(error);
      }
    );
  }
  goToState(state) {
    this.router.navigate(['/state', state]);
  }



}
