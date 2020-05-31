import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JwtService } from '../jwt.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private auth:JwtService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    registeruser(){
      this.auth.registerUser(this.profileForm.value)
      .subscribe(
      res=> {
        //alert("Registration successfull,Please Login");
        this.toastr.success("Registration sucess Please Login");
      this.router.navigate(["/"]);
      },
      error=>{
        // console.log(error);
        this.toastr.error(error.error.message)
      //alert(error.error.message);
    }
  )
      //this.router.navigate(["/dashboard"]);
    }
}
