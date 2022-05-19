import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(public fb: FormBuilder, public serviceLogin: LoginService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      'usuario': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      'password': []
    });
  }


  aceptar()
  {
    const {usuario,password} = this.form.value;
      if(this.serviceLogin.login(usuario,password)){
        console.log("se logueo")
        return true;  

      }
    console.log(usuario,password)
      console.log("no logueo") 
    return false;
  }

}
