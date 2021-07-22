import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClientService} from '../../../service/http-client.service'

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  dataComentarios: any = [];


  constructor(private userService: HttpClientService, private routeActivated: ActivatedRoute) {
   
   }

   getData(): void{
    const id = this.routeActivated.snapshot.params['id']
    this.userService.getData(`/posts/${id}/comments`).subscribe(data=>{
      console.log(data)
      this.dataComentarios = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  
    
  }

}
