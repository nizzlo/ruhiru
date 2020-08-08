import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  

  onSubmit() {

    var email=this.loginForm.get('email').value;
    var password=this.loginForm.get('password').value
    //console.log(email);
    //console.log(password);

    let loginData = {
      "email": email,
      "password": password
  }

  var url="https://d9edc04fdbc6.ngrok.io/api/v1/user/login"

    this.http.post<any>(url,loginData).subscribe(data =>{
      console.log(data);
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
