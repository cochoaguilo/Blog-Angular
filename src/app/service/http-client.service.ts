import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private http:HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com'
  
  getData(path: string){
  
    
    return this.http.get(this.url+path)
  }
  deleteData(path:string){
    return this.http.delete(this.url+path)
  }
}
