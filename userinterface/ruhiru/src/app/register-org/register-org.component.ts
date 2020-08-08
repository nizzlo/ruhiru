import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-org',
  templateUrl: './register-org.component.html',
  styleUrls: ['./register-org.component.css']
})
export class RegisterOrgComponent implements OnInit {

  constructor(private http:HttpClient) { }

  RegForm = new FormGroup({
    Name: new FormControl(''),
    email: new FormControl(''),
    ContactNo: new FormControl(''),
    address: new FormControl(''),
    Password1: new FormControl(''),
    password2: new FormControl('')
  });

  onSubmit() {
    var name = this.RegForm.get("Name").value;
    var email = this.RegForm.get("email").value;
    var address = this.RegForm.get("address").value;
    var password = this.RegForm.get("Password1").value;
    var contact = this.RegForm.get("ContactNo").value;
    let regData = {
      "name":name,
      "email":email,
      "address":address,
      "contact":contact,
      "password":password
    }
    var url="https://d9edc04fdbc6.ngrok.io/api/v1/user/organization"

    this.http.post<any>(url,regData).subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
