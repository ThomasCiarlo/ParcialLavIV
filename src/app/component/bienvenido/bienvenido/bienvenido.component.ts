import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;

  bandera:string="";
  constructor(public serviceGit: HttpService,public serviceLogin: LoginService) { }

  ngOnInit(): void {
  }


}
