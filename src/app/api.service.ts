import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseurl: String = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  getProduct(): Observable<any> {
    return this.http.get(this.baseurl + 'getallproducts');
  }
  getuser(): Observable<any> {
    return this.http.get(this.baseurl + 'get_user');
  }
  get_one_user(): Observable<any> {
    return this.http.get(this.baseurl + 'get_user/:user_email');
  }
  create_user(user: any): Observable<any> {
    console.log(user);
    let Body = JSON.stringify(user);
    console.log(Body);
    return this.http.post(this.baseurl + 'create_newuser', Body, {
      headers: this.headers,
    });
  }
  get_from_cart(): Observable<any> {
    return this.http.get(
      this.baseurl + 'getbyemail/' + localStorage.getItem('set')
    );
  }
  add_to_cart(product: any): Observable<any> {
    product.name = localStorage.getItem('set');
    console.log(product);
    let Body = JSON.stringify(product);
    return this.http.post(this.baseurl + 'add_to_cart', Body, {
      headers: this.headers,
    });
  }
  get_this_item(product: any): Observable<any> {
    console.log(product.SerialNumber);
    return this.http.get(
      this.baseurl + 'get_pointer_item/' + product.SerialNumber
    );
  }
}
