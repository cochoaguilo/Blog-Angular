import { Component, Input, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() foto: any

  fotoExpandida: boolean = false
  constructor(private http: HttpClientService) { }

  ngOnInit(): void {
  }
  toogleFoto(): void{
    this.fotoExpandida = !this.fotoExpandida
  }
  deleteCard(): void{
    console.log(this.foto.id);
    
    this.http.deleteData(`/albums/${this.foto.id}/photos`)
    window.location.reload()
  }
}
