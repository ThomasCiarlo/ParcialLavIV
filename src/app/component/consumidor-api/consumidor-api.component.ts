import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumidor-api',
  templateUrl: './consumidor-api.component.html',
  styleUrls: ['./consumidor-api.component.css']
})
export class ConsumidorApiComponent implements OnInit {

  nombre:any[]|undefined;
  imagen!: string;
  misdatos:Observable<any>|undefined;

  constructor(public serviceGit: HttpService) { }

  ngOnInit(): void {

    this.serviceGit.todos().subscribe(
      datos=>{
      this.nombre = datos.login;
      this.imagen = datos.avatar_url; 
    });
    
    this.misdatos = this.serviceGit.todos();
  }

}
