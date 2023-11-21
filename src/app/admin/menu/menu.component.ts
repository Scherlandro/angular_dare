import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {AuthService} from "../../services/auth.service";
import {ITokenUser} from "../../interfaces/user";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mostrarMenuHeader: boolean = false;
  nameDoUsuario: string = '';
  user: ITokenUser = {
    id: 0,
    name: '',
    username: ''
  }
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
   // this.user = this.tokenService.getPayload();
    this.mostrarMenuHeader = this.tokenService.isLogged();
    console.log(this.user , 'Você acabou de logar')
  }
  logout(): void{
    this.tokenService.clearToken()
  }


}
