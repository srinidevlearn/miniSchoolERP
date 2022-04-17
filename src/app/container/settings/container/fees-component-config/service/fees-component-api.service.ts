import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeesComponentApiService {

  private apiURl :string =  'api/feesComponentConfig';
  constructor(private http:HttpClient) { }
  getFeesComponentConfigure(){
    return this.http.get(this.apiURl).pipe(retry(2),catchError((e)=>of([])),tap((d)=>console.log(d)))
  }
}
