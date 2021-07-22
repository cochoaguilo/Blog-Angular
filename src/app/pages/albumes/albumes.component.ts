import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service'

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

  dataAlbumes: any =[]
  constructor(private userService: HttpClientService, ) {
   
  }

  getData(): void{
   this.userService.getData('/albums').subscribe(data=>{
     this.dataAlbumes = data
   })
  } 

 ngOnInit(): void {
   this.getData()
 
   
 }

}
