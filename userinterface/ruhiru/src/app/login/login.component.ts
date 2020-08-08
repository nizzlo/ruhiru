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
      //console.log(data);
      console.log(data.user.email);
      localStorage.setItem('email', data.user.email);
      console.log(data.user.contact);
      localStorage.setItem('contact', data.user.contact);
      console.log(data.user.firstName);
      localStorage.setItem('firstName', data.user.firstName);
      console.log(data.user.lastName);
      localStorage.setItem('lastName', data.user.lastName);
      console.log(data.user.profile.bloodgroup);
      localStorage.setItem('bloodgroup', data.user.profile.bloodgroup);
      console.log(data.user.profile.points);
      localStorage.setItem('points', data.user.profile.points);
      console.log(data.accessToken);
      localStorage.setItem('accessToken', data.accessToken);
      console.log(data.user.profile.location);
      localStorage.setItem('location', data.user.profile.location);
      console.log(data);
    },error =>{
      alert("Unauthorized Access, try again.")
    });
  }

  ngOnInit(): void {
  }

}
