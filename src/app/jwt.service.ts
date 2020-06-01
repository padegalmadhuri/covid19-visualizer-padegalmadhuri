import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private registerurl="https://zen-user-api.herokuapp.com/users/register"
  private loginUrl="https://zen-user-api.herokuapp.com/users/authenticate"
  private statusUrl="https://covid19.mathdro.id/api/countries/india";
  private apiUrl="http://covid19-india-adhikansh.herokuapp.com/states";
  private districtUrl="https://api.covid19india.org/v2/state_district_wise.json";
  constructor(private http:HttpClient,private router:Router) { }
  registerUser(user){
    return this.http.post<any>(this.registerurl,user)
  }
  loginUser(user)
  {
    console.log(localStorage.getItem('token'));
    return this.http.post<any>(this.loginUrl,user)

  }
  storeToken(token){
    localStorage.setItem('token',token);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(["/"]);
  }

  isLoggedIn(){
    //console.log(localStorage.getItem('token'))
    return !!localStorage.getItem('token');
  }
  getData(){
    return this.http.get<any>(this.statusUrl);
  }
  getApiData(){
    return this.http.get<any>(this.apiUrl);
  }
  retiveBarChartData(){
   return this.http.get<any>(this.statusUrl)
 }
 // getDistrictData(){
 //   return this.http.get<any>(this.districtUrl)
 // }
 getCountryData() {
   return this.http.get<any>('https://api.covid19india.org/data.json');
 }
 getStateData() {
   return this.http.get<any>(
     'https://api.covid19india.org/v2/state_district_wise.json'
   );
 }
}
