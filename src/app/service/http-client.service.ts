import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private http:HttpClient) { }

  
  getData(path: string){
    let url = 'https://jsonplaceholder.typicode.com'
    
    return this.http.get(url+path)
  }
}
