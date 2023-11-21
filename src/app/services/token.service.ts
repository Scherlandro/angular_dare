import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {ITokenUser, IUser} from '../interfaces/user';
import {jwtDecode} from "jwt-decode";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  confi:boolean = false;

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token)
   // this.router.navigate(['admin'])
  }

  loginToken(res: any){
    this.confi = res;
    this.isLogged();
  }


  isLogged(): boolean{
  //  const token = localStorage.getItem('token')
    console.log(" Val this.confi no  isLogged ",this.confi)
   // this.router.navigate(['admin'])
      return this.confi;
   // return !! token
  }

  clearToken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  clearTokenExpired(): void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }


  getPayload(){
    let user: ITokenUser = {
      id: 0,
      name: '',
      username: ''
    }

    let token = localStorage.getItem('token')
    if(token != null){
      const decode: ITokenUser =  jwtDecode<ITokenUser>(token)
      user.id = decode.id
      user.name = decode.name
      user.username = decode.username
    }
    return user
  }

}
