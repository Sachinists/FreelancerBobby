import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FeedbackDetails } from 'src/app/Model/FeedbackDetails';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  allFeed : FeedbackDetails[];
  show: boolean = false;
  showPage: boolean = false;
  constructor(private http :HttpService) { }

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    let a = await this.http.getFeedDetails();
    this.allFeed = <FeedbackDetails[]>a;
    console.log(this.allFeed)
    if(this.allFeed.length == 0){
      this.show = true
    }else{
      if(this.allFeed.length > 10){
        this.showPage = true
      }
    }
  }

}
