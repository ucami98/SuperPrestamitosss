import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStrgService {

  constructor(private http:HttpClient) {

   }


 consultarPrestamo(Name:String,Salary:String,Duration:String,Work:String){
    const prestamo = `http://localhost:3030/prestamo?Name=${Name}&Salary=${Salary}&Duration=${Duration}&Work=${Work}`;
console.log(prestamo)
    return this.http.get(prestamo)
    
      }
    
  }


  // ver porque solo me retorna prestamo y el objeto de work