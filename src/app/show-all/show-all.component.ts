import { Component, OnInit } from '@angular/core';
import {employee} from "../Model/employee";
import {APIEmployeeService} from "../services/api-employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  employes:employee[]=[]
  employe:any={
    id:null,
    name:'',
    salary:null
  }

  constructor(private api:APIEmployeeService, private router:Router ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.api.getAll().subscribe(data=>{
      this.employes=data

    })
  }

  delete(id:any){
    this.api.delete(id).subscribe(()=>{
      this.employes=this.employes.filter(e=>e.id != id)
    })
  }

  btnEdit(id:any){
    console.log("up clicked")
    return this.router.navigateByUrl(`/update/${id}`)
  }

}
