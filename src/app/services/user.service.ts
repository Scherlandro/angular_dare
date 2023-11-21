import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, map, tap} from 'rxjs';
import {ISingleUser, IUser} from '../interfaces/user';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.API_PATH + 'api/user';
  private list: IUser[]=[];


  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.baseUrl+'/all')
  }

  getUsers(){
    return this._http.get(this.baseUrl).toPromise()
      .then(res => this.list = res as IUser[]);
  }

  getUser(uid: string | null): Observable<ISingleUser>{
    return this._http.get<ISingleUser>(this.baseUrl+'/'+uid)
  }

  buscarPorCod(id: string): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.baseUrl + id)
      .pipe(map((res:IUser[])=> res));
  }

  getUsuarioPorID(id:string){
    return this._http.get<IUser[]>(this.baseUrl + id)
      .pipe(
        first(),
        delay(2000),
        tap(DebugarUser => console.log(DebugarUser))
      );
  }
  editarUsuario(user: IUser): Observable<IUser> {
    return this._http.put<IUser>(this.baseUrl+'/edit-user',user);
  }

  createUsuario(user: IUser): Observable<IUser> {
    return this._http.post<IUser>(this.baseUrl+'/save-user/',user);
  }

  deleteUsuario(id: number): Observable<IUser> {
    return this._http.delete<IUser>(this.baseUrl +'/delete-user/'+ id);
  }

}
