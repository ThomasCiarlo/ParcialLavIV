import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api: string = 'https://api.github.com/users/octaviovillegas';

  constructor(public http: HttpClient) { }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  todos(): Observable<any> {
    return this.http.get(this.api);
    
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

}
