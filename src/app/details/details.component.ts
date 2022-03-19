import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  serialNumber = '';
  products: any = [];
  product_cat: any;
  cp: any;
  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private api: ApiService
  ) {}
  baseurl: String = 'http://localhost:8000/api/';
  ngOnInit(): void {
    this.serialNumber = this.actRoute.snapshot.params['SerialNumber'];
    console.log('hi');
    console.log(this.serialNumber);
    // this.products = this.ProductsService.getSeries();
    // this.getprod();
    this.http
      .get(this.baseurl + 'get_by_id/' + this.serialNumber)
      .subscribe((data: any) => {
        this.product_cat = data[0];
        console.log(data);
      });
  }
  // getprod() {
  //   for (let i of this.products) {
  //     if (this.name == i.Description) {
  //       this.product_cat = i;
  //       break;
  //     }
  //   }
  // }
}
