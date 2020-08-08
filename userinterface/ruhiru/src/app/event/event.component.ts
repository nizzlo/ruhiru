import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface event { //creates the car interface.
  name: string;
  location: string;
  organizer: string;
  description:string;
  startTime: number;
  endTime: boolean;
  createdAt: number;
  updatedAt: number;
 
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: event[] = [];   
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.getEvents();
  }
  private getEvents(){ //http get request.
    var url = "https://d9edc04fdbc6.ngrok.io/api/v1/event";

    this.http.get<event []>(url).subscribe(data =>{
      if(data!=null){
        this.events = data;
      }
      else{
        console.log("Null Response from backend detected for fetching events")
        this.events = null;
      }

    }
    ,error=>{
      console.log("Http Request Error: Connection Refused")
      this.events = null;
    });
  }
}
