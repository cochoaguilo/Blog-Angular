import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service'


@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {

  dataPosteos: any =[]
  constructor(private userService: HttpClientService, ) {
   
  }
  filterPost:any = ''
  getData(): void{
   this.userService.getData('/posts').subscribe(data=>{
     this.dataPosteos = data
   })
  } 

 ngOnInit(): void {
   this.getData()
 }

 onKeyup(filterValue:string){
   this.dataPosteos.filter = filterValue.trim().toLowerCase();
 }

}
