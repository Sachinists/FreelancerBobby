import { Injectable } from '@angular/core';
import { Feedback } from './Model/Feedback';
import { HttpClient } from '@angular/common/http';
import { FeedbackDetails } from './Model/FeedbackDetails';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private url = "https://feedback-module.herokuapp.com/";
  private url = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  async getFeedCount() {
    console.log(this.url+ "getFeedbackCount");
   return await this.http.get<Feedback[]>(this.url+ "getFeedbackCount").toPromise();
  }

  async getFeedDetails() {
    return await this.http.get<FeedbackDetails[]>(this.url+ "getAllFeedbacks").toPromise();
   }
}
