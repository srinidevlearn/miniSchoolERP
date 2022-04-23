import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { stringifyNullValues } from 'src/app/utility/utility';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {
  private url: string = environment.apiEndPoint;

  constructor(private http: HttpClient) {}

  getAllStudentDetails() {
    return this.http.get(`${this.url}/studentdetails`)
    .pipe(
      map((d:any)=>{
        if(Array.isArray(d) && d?.length > 0 ){ return d.map(stringifyNullValues)}
        else return d;
      }),
      tap(d=>console.log(d))
      // filter((d: any) => d?.length > 0),
      // map((data: any[]) => {
      //   return data?.length
      //     ? data.map((d) => this.modifyToLowerCaseKeys(d))
      //     : [];
      // })),
    );
  }

}
