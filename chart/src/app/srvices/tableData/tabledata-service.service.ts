import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataServiceService {
  constructor(public http :HttpClient) { }
  

  getData(){
    return this.http.get<any>('assets/data.json')
}
}
