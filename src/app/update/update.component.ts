import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../Model/employee';
import { APIEmployeeService } from '../services/api-employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employes : employee[]=[]

  myId:any

  constructor(private api:APIEmployeeService,private query:ActivatedRoute) { }

  ngOnInit(): void {
    this.query.params.subscribe(params=>{
      this.myId = params
    })

    this.getAll()
  }

  getAll(){
    this.api.getAll().subscribe(data=>{
      this.employes = data
    })
  }

  editE(employe:any){
    this.api.update(employe).subscribe(data=>{
      this.employes = [data]
    })
  }

}
