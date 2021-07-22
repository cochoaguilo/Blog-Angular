import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClientService} from '../../../service/http-client.service'

@Component({
  selector: 'app-usuario-by-album',
  templateUrl: './usuario-by-album.component.html',
  styleUrls: ['./usuario-by-album.component.css']
})
export class UsuarioByAlbumComponent implements OnInit {

  dataUsersbyAlbum: any = [];


  constructor(private userService: HttpClientService, private routeActivated: ActivatedRoute) {
   
   }

   getData(): void{
    const id = this.routeActivated.snapshot.params['id']
    this.userService.getData(`/users/${id}/albums`).subscribe(data=>{
      console.log(data)
      this.dataUsersbyAlbum = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  
    
  }

}
