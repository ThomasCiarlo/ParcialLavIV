import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/entidad/usuario/usuario';
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
      'email': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      'password': []
    });
  }


  async aceptar() {
    const { email, password } = this.form.value;
    const usuario: Usuario = new Usuario();
    usuario.email = email;
    usuario.password = password;

    await this.serviceLogin.login(usuario).then(() => {
      if (this.serviceLogin.usuario != null) {
        console.log("se logueo")
      }
    });
  }

  async inicioRapido()
  {
    const usuario: Usuario = new Usuario();
    usuario.email = 'thomasciarlo18@gmail.com';
    usuario.password = '123456';

    await this.serviceLogin.login(usuario).then(() => {
      if (this.serviceLogin.usuario != undefined) {
        console.log("usuario")
        
      }
    });
  }

}
