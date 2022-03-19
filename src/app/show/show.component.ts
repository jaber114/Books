import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ShopcartService } from '../shopcart.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  product: any = [];
  @Input() select: any;
  baseurl: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };
  constructor(
    private ProductsService: ProductsService,
    private ShopcartService: ShopcartService,
    private http: HttpClient,
    private apiservice: ApiService
  ) {}
  addproducts(product: any): Observable<any> {
    let body = JSON.stringify(product);
    return this.http.post(this.baseurl + 'products', body, {
      headers: this.headers,
    });
  }
  ngOnInit(): void {
    this.product = this.ProductsService.getSeries();
    var body = JSON.stringify(this.product);
    console.log(body);

    this.apiservice.getProduct().subscribe((data) => {
      this.product = data;
    });
  }
  add_product(product: any) {
    // this.ShopcartService.addproduct(product);
    this.apiservice.get_this_item(product).subscribe((data) => {
      console.log(data);
      if (data.length == 0) {
        this.apiservice.add_to_cart(product).subscribe((data) => {
          console.log(data);
        });
      } else {
        let id = Math.floor(
          Math.random() * 100000 + product.SerialNumber + 1
        ).toString();
        let prod = new Product(
          id,
          product.Name,
          product.Price,
          product.category,
          product.Description,
          product.imgurl,
          localStorage.getItem('set')
        );
        console.log(prod);
        this.apiservice.add_to_cart(prod).subscribe((data) => {
          console.log(data);
        });
      }
    });
    alert('product added to the cart successfully');
  }
}
class Product {
  SerialNumber: String;
  Name: string;
  Price: number;
  category: string;
  Description: string;
  imgurl: string;
  name: any;

  constructor(
    SerialNumber: String,
    Name: string,
    Price: number,
    category: string,
    Description: string,
    imgurl: string,
    name: any
  ) {
    this.SerialNumber = SerialNumber;
    this.Name = Name;
    this.Price = Price;
    this.category = category;
    this.Description = Description;
    this.imgurl = imgurl;
    this.name = name;
  }
}
