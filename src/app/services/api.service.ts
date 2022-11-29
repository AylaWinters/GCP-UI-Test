import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/models/Message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = "http://localhost:8080/";
  private headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http:HttpClient) { }

  public submitText(text:Message){
    return this.http.post(`${this.baseUrl}post`, text);
  }

}
