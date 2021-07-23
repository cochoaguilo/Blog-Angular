import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 
  dataTodos: any = []

  filterById: any = ''

  constructor(private userService: HttpClientService) {
   
  }
  getData(): void{
    this.userService.getData(`/todos`).subscribe(data=>{
      console.log(data);
      
      this.dataTodos = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  }
}
