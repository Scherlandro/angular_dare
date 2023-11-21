
import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable,tap} from "rxjs";
import {Router} from "@angular/router";
import {BaseService} from "./base.service";
import {IUser} from "../interfaces/user";
import {IToken} from "../interfaces/token";
import {TokenService} from "./token.service";
import {ICredential} from "../interfaces/credential";
import {User} from "../interfaces/usuario";
import {AuthResponseData} from "./auth-localstorage";

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn:'root'
  })
  export class AuthService extends BaseService{

  private baseUrl: string = environment.API_PATH+'api/';

    islog!: Observable<boolean>;
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;
    public usuarioAutenticado: boolean = false;
    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private _http: HttpClient,
            private router: Router,
            private tokenService: TokenService
                )
   {
     super('auth')
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  saveUser(response: IUser) {
    let user: IUser = { id: 0, name: '', username: '', password: ''}
    user = response
    this.currentUserSubject.next(user);
    localStorage.setItem('token', JSON.stringify(user));
    return true;
  }

  login(response: any) {

    let user = JSON.parse(<string>localStorage.getItem('token'));
    if(user) {
      // console.log('User na localstorage ', user.slice(96).replace("\\", "").replace('"}"', ""));
      let confpass = user.password == response.password;
      if (confpass) {
        this.tokenService.loginToken(confpass);
        this.router.navigate(['admin'])
      }
    }
    else
    this.currentUserSubject.next(response);
      return this.currentUserSubject;
  }


  public get currentUserValue(): IUser {
    return this.currentUserSubject.getValue();
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  //set name user new in storage
  setUserName(username:string){
    localStorage.setItem('username', JSON.stringify(username));
  }
  getUserName(){
    return JSON.parse(<string>localStorage.getItem('username'));
  }

  getUserClaims(){
    return  this._http.get(this.baseUrl+'user/token-refresh');
  }

  userAuthentication(username: string, password: string):Observable<IToken> {
    return  this._http.post<IToken>(this.baseUrl+'login/?username='+username+'&password='+password+'','',this.setUpHeaders())
   .pipe(tap(respToken => {
        return respToken;
    }));
    }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    // @ts-ignore
    this.currentUserSubject.next(null);
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['']);
    this.tokenService.clearToken()
  }

  get obterUsuarioLogado(): IUser {
    return localStorage.getItem('currentUser')
      ? JSON.parse(atob(<string>localStorage.getItem('currentUser'))) : null;
  }
  get obterIdUsuarioLogado(): string {
    return localStorage.getItem('currentUser')
      ? <any>(JSON.parse(atob(<string>localStorage.getItem('currentUser'))) as IUser).id
      : null;
  }
  get obterTokenUsuario(): string {
    return localStorage.getItem('access_token')
      ? JSON.parse(atob(<string>localStorage.getItem('access_token')))
      : null;
  }
  get logado(): boolean {
    return localStorage.getItem('access_token') ? true : false;
  }


}

