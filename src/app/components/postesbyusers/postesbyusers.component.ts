import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service'

@Component({
  selector: 'app-postesbyusers',
  templateUrl: './postesbyusers.component.html',
  styleUrls: ['./postesbyusers.component.css']
})
export class PostesbyusersComponent implements OnInit {

  dataPosteos:any = []

  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
    this.http.getData('/users/1/posts').subscribe(data=>{
      console.log(data);
      
      this.dataPosteos = data
    })
  }

}
