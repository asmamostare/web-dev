import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employee';
import { APIEmployeeService } from '../services/api-employee.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employes : employee[]=[]

  employe:any={
    id:null,
    nom:'',
    prenom:'',
    salaire:null
  }

  constructor(private api:APIEmployeeService , private router:Router ) { }

  ngOnInit(): void {
  }

  addE(){
    console.log("add lunched")
    this.api.add(this.employe).subscribe(data=>{
      this.employes = [data]
      return this.router.navigateByUrl(`/showAll`)

    })
  }

}
