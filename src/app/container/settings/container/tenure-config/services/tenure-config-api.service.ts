import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenureConfigApiService { 
  private productsUrl = 'api/products/';
  private tenureUrl = 'api/tenureConfig/';


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.productsUrl)
  }

  getTenureConfig(){
    return this.http.get(this.tenureUrl)
  }
}
