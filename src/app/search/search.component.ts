import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employee';
import { APIEmployeeService } from '../services/api-employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employes : employee[]=[]

  employe : any = {
    id:null,
    name:'',
    salary:null
  }

  constructor(private api:APIEmployeeService) { }

  ngOnInit(): void {
    this.search()
  }

  search(){
    this.api.getAll().subscribe(data=>{
      this.employes = data.filter(e=>e.id == this.employe.id)
    })
  }

}
