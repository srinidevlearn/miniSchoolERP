import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgApiService {
  private apiUrl = 'api/orgConfig';
  constructor(private http:HttpClient) { 
    
  }

  getOrgLists(){
    return this.http.get(this.apiUrl).pipe(retry(1),catchError((e:any)=>of([])))
  }
}
