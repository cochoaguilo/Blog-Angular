import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  dataTodo: any = []

  constructor(private userService: HttpClientService, private routeActivated: ActivatedRoute) {
   
  }
  getData(): void{
    const id = this.routeActivated.snapshot.params['id']
    this.userService.getData(`/users/${id}/todos`).subscribe(data=>{
      console.log(data);
      
      this.dataTodo = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  }
}
