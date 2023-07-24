import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  private URL: string = 'https://happiness-e6f24-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
