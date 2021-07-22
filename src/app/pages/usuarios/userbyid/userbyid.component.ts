import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-userbyid',
  templateUrl: './userbyid.component.html',
  styleUrls: ['./userbyid.component.css']
})
export class UserbyidComponent implements OnInit {
  dataUserbyId: any = {};


  constructor(private userService: HttpClientService, private routeActivated: ActivatedRoute) {
   
   }

   getData(): void{
    const id = this.routeActivated.snapshot.params['id']
    this.userService.getData(`/users/${id}`).subscribe(data=>{
      console.log(data)
      this.dataUserbyId = data
    })
   } 

  ngOnInit(): void {
    this.getData()
  
    
  }
}
