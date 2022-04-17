import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgApiService {
  private apiUrl:string = 'api/organizationConfig'
  constructor(private http:HttpClient) { }
  getOrganizationConfig(){
    return this.http.get(this.apiUrl).pipe(retry(2),catchError((e)=>of([])))
  }
}
