import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  contact: string;
  firstName: string;
  lastname: string;
  points: string;
  bloodgroup: string;
  accessToken: string;
  location: string;

  constructor( private router: Router) {
    this.email =localStorage.getItem('email');
    this.contact =localStorage.getItem('contact');
    this.firstName =localStorage.getItem('firstName');
    this.lastname= localStorage.getItem('lastName');
    this.bloodgroup= localStorage.getItem('bloodgroup');
    this.points = localStorage.getItem('points');
    this.accessToken =localStorage.getItem('accessToken');
    this.location = localStorage.getItem('location');
   }


  ngOnInit(): void {
    // if(localStorage.getItem('accessToken')==null){
    //   this.router.navigate(['/login']);
    // }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
