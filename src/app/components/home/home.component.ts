import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Message } from 'src/models/Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message:string = "";
  response:string = "";

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    console.log("direct to fx");
    
  }

  submit(){
    console.log(this.message);
    const json:Message = {
      text: this.message
    }  
    this.api.submitText(json).subscribe(res => {
      console.log(res);
      this.response = res.toString();
      console.log(this.response);
    });
  }

}