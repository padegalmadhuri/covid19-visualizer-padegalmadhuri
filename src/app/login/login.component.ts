import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JwtService } from '../jwt.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private auth:JwtService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
    loginuser(){
      if(this.loginForm.valid){
      this.auth.loginUser(this.loginForm.value)
      .subscribe(res=>{
        //alert("LOGIN success");
        localStorage.setItem('token', res['token']);
        this.toastr.success("Login success");
        console.log(res);
        this.auth.storeToken(res.token);
        // console.log(res);
        this.router.navigate(["/dashboard"]);
      },
                  err=>this.toastr.error(err.error.message,)
              //alert(err.error.message)
      )
      }
    }
}
