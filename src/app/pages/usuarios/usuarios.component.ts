import { Component, OnInit, } from '@angular/core';
import {HttpClientService} from '../../service/http-client.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  dataUsers: any = [];


  constructor(private userService: HttpClientService, ) {
   
   }

   getData(): void{
    this.userService.getData('/users').subscribe(data=>{
      console.log(data)
      this.dataUsers = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  
    
  }
  
}
