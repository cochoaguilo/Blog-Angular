import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../../../service/http-client.service'

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  dataFotos:any = []

  constructor(private http: HttpClientService, private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routeActivated.snapshot.params['id']
    this.http.getData(`/albums/${id}/photos`).subscribe(data=>{
      console.log(data);
      
      this.dataFotos = data
    })
  }

}
