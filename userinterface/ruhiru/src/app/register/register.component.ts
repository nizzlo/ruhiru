import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private access : Boolean;

  constructor(private http:HttpClient) {
     this.access = false;
   }

  

  RegForm = new FormGroup({
    fName: new FormControl(''),
    lName: new FormControl(''),
    email: new FormControl(''),
    ContactNo: new FormControl(''),
    Password1: new FormControl(''),
    password2: new FormControl('')
  });

  onSubmit() {
    var fname = this.RegForm.get("fName").value;
    var lname = this.RegForm.get("lName").value;
    var email = this.RegForm.get("email").value;
    var password = this.RegForm.get("Password1").value;
    var contact = this.RegForm.get("ContactNo").value;
    let regData = {
      "firstName":fname,
      "lastName":lname,
      "email":email,
      "password":password,
      "contact":contact
    }
    var url="https://d9edc04fdbc6.ngrok.io/api/v1/user/register"

    this.http.post<any>(url,regData).subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  onSearchChange(searchValue: string): void {  
    if(searchValue == this.RegForm.get("Password1").get.toString()){
      this.access = true;
    }
    else{
      document.getElementById("passwordConf").style.borderColor = "red";
    }
  }
}
