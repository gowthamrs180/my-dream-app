import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  text:string='Login Page';
  username:any;
  password:any;
  profile =this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]

  });
  register =this.fb.group({
    username: ['',[Validators.required]],
    Email: ['',[Validators.required]],
    Password: ['',[Validators.required]],
    ConformPassword:['',[Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  callingFunction(){
    console.log(this.profile.value);
    this.profile.reset();
  }
  reg(){
    console.log(this.register.value);
   
    if(this.register.valid){
      if (this.register.value['Password']=== this.register.value['ConformPassword']) {
        alert("password is correct");
      }
        else{
          alert("password is incorrect");
        }
  }
  localStorage.setItem('username', this.register.value.username);
  localStorage.setItem('Email', this.register.value.Email);
  this.register.reset();
}

}
