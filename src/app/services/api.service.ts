import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/models/Message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  baseUrl:string = "https://divr-fx-test-zt2hbaea4q-uc.a.run.app";

  private headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http:HttpClient) { }

  public submitText(text:Message){
    console.log(`${this.baseUrl}/postData`);
    
    return this.http.post(`${this.baseUrl}/postData`, text);
  }

}
