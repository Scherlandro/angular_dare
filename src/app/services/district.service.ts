import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable, tap} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor( private _http: HttpClient ) {
  }

  topNews = 'https://newsdata.io/api/1/news?apikey=pub_2840484097b9af883c43f609021c69378c2bb';

  topPictures = 'https://jsonplaceholder.typicode.com/';


  topImagens():Observable<any>{
     return this._http.get(this.topPictures +'photos')
      .pipe(
        first(),
        delay(200),
        tap(Debug => console.log(Debug))
      );
  }

  topHeadlines():Observable<any>{
    return this._http.get(this.topNews)
      .pipe(
      first(),
      delay(200),
      tap(Debug => console.log(Debug))
    )
  }


}
