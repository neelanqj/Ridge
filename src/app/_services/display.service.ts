import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  public getLeftMainMenu() {
    return this.http.get(environment.apiUrl + 'display/getnavigation/2/1');
  }

}
