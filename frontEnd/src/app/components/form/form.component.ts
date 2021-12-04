import { Component, OnInit ,Input} from '@angular/core';
import { LocalStrgService } from 'src/app/services/local-strg.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  lockButton: Boolean;
  Name:String;
  Id:String;
  Mail:String;
  Salary:String;
  Duration:String;
  Work:String;
  result:String;
  

  constructor(private localStrgService:LocalStrgService) {
    this.lockButton = false;
    this.Name ="";
    this.Id="";
    this.Mail="";
    this.Salary="";
    this.Duration="";
    this.Work="";
    this.result="";
    
   }

  ngOnInit(): void {
    console.log("Ey ya inicie!")
  }

  clickConsultar():void{
    console.log('hola!x2');
    this.lockButton=true;
   this.localStrgService.consultarPrestamo(this.Name,this.Salary,this.Duration,this.Work).subscribe((data)=>{
      console.log("respuesta del servidor ")
     console.log(data)
     let respuesta = JSON.stringify(data)
     const result = document.getElementById("Result")!;
     result.innerHTML = "Respuesta a la solicitud" + respuesta  ;
      
    
      this.lockButton=false;
  });}
}

//aqui tengo que fijarme que vallan las respuestas de lo que voy a imprimir, pero con lo del back sin comentar ya debera salir todo bien
