import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { 
      }
  
   apiStr = "http://localhost:8001/api/"; 
  saveUser(user){
      return this.http.post(this.apiStr+'saveUser/',user);
  }
}