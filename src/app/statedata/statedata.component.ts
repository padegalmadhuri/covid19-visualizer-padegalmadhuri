import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtService } from '../jwt.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-statedata',
  templateUrl: './statedata.component.html',
  styleUrls: ['./statedata.component.css']
})
export class StatedataComponent implements OnInit {

  constructor(private route:ActivatedRoute,private toastr:ToastrService,private auth:JwtService) {
  this.loadStateData()
 }
  data;
  name;
  ngOnInit(): void {
  }
  loadStateData() {
      this.auth.getStateData().subscribe(
        (responce) => {
          this.data = responce.find(
            (data) => data['statecode'] == [this.route.snapshot.params['id']]
          );
          this.name = this.data['state'];
          this.data = this.data['districtData'];

          console.log(this.data);
          //this.childChart.updateChart(this.data, 'state');
        },
        (error) => {
          this.toastr.error('Network Error!');
          console.log(error);
        }
      );
    }
}
