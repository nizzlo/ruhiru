import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }

  EventForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    organizer: new FormControl(''),
    description: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl('')
  });

  onSubmit() {
    var name = this.EventForm.get("name").value;
    var location = this.EventForm.get("location").value;
    var organizer = this.EventForm.get("organizer").value;
    var description = this.EventForm.get("description").value;
    var startTime = this.EventForm.get("startTime").value;
    var endTime = this.EventForm.get("endTime").value;
    let eveData = {
      "name":name,
      "location":location,
      "organizer":organizer,

      "description":description,
      "startTime":startTime,
      "endTime":endTime
    }
    var url="https://d9edc04fdbc6.ngrok.io/api/v1/event"
    
    let headers = new HttpHeaders({
      'Authorization': localStorage.getItem('accessToken'),
    });

    let options = { headers: headers };


    this.http.post<any>(url,eveData,options).subscribe(data =>{
      console.log(data);
      
    },error=>{
      console.log(localStorage.getItem('accessToken'));
    });
  }
  


  ngOnInit(): void {
  }

}
