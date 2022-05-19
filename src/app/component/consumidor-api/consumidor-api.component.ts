import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumidor-api',
  templateUrl: './consumidor-api.component.html',
  styleUrls: ['./consumidor-api.component.css']
})
export class ConsumidorApiComponent implements OnInit {

  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;

  constructor(public serviceGit: HttpService) { }

  ngOnInit(): void {

    this.serviceGit.todos().subscribe(
      banderas=>{
        console.info(banderas);  
      this.misBanderas = banderas.login; 
    }  );
    
    this.misPaises = this.serviceGit.todos();

  }

}
