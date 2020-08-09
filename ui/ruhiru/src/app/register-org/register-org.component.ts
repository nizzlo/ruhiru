import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-org',
  templateUrl: './register-org.component.html',
  styleUrls: ['./register-org.component.css']
})
export class RegisterOrgComponent implements OnInit {

  private access : Boolean;

  constructor(private http:HttpClient) { 
    this.access = false;
  }

  RegForm = new FormGroup({
    Name: new FormControl(''),
    email: new FormControl(''),
    ContactNo: new FormControl(''),
    address: new FormControl(''),
    Password1: new FormControl(''),
    password2: new FormControl('')
  });

  onSubmit() {
    if(this.access == true){
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
      console.log(regData);
      var url="https://d9edc04fdbc6.ngrok.io/api/v1/organization";

      this.http.post<any>(url,regData).subscribe(data =>{
        console.log(data);
        alert("Registration successful")
      });
    }
  }

  ngOnInit(): void {
  }

  onSearchChange(searchValue: string): void {  
    if(searchValue == this.RegForm.get("Password1").value){
      document.getElementById("test").style.borderColor = "#EBE9ED";
      var element = (<HTMLInputElement>document.getElementById("submit")).disabled = false;
      this.access = true;
    }
    else{
      document.getElementById("test").style.borderColor = "red";
      var element = (<HTMLInputElement>document.getElementById("submit")).disabled = true;
    }
  }
}
