import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class APIEmployeeService {

  url="http://localhost:3000/employee";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<employee[]>(this.url)
  }

  delete(id:any){
    return this.http.delete(this.url+ '/' + id)
  }

  update(employee:any){
    return this.http.patch<employee>(this.url+'/'+employee.id,employee)
  }

  add(employee:any){
    return this.http.post<employee>(this.url,employee)
  }
}
