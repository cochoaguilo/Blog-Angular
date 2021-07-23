import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-todosbyuser',
  templateUrl: './todosbyuser.component.html',
  styleUrls: ['./todosbyuser.component.css']
})
export class TodosByUserComponent implements OnInit {

  dataTodo: any = []

  filterById: any = ''

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
