import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

interface event { //creates the car interface.
  name: string;
  location: string;
  organizer: string;
  description:string;
  startTime: number;
  endTime: boolean;
  createdAt: number;
  updatedAt: number;
  _id:string;
 
}
@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

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

  deleteEvents(event){ //http get request.
    var url = "https://d9edc04fdbc6.ngrok.io/api/v1/event/";

    let headers = new HttpHeaders({
      'Authorization': "JWT "+localStorage.getItem('accessToken'),
    });

    let results = {
      "name":event.name,
      "location":event.location,
      "organizer":event.organizer,
      "description":event.description,
      "startTime":event.startTime,
      "endTime":event.endTime,
      "_id":event._id
    }

    let httpParams = new HttpParams()
    .set("_id",event._id)
    

    let options = { headers: headers, params: httpParams};

    this.http.delete<any>(url,options).subscribe(data =>{
      if(data!=null){
        alert("Deletion Success");
      }
      else{
        console.log("Null Response from backend detected for deleting event")
      }

    }
    ,error=>{
      console.log(console.error(error));
      console.log(JSON.stringify(httpParams.get("location")));
    });
  }

}
