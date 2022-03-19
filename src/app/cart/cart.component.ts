import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ShopcartService } from '../shopcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: any = [];
  total_price = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get_from_cart().subscribe((data) => {
      this.carts = data;
      console.log(this.carts[0]);
      for (let it of this.carts) {
        this.total_price += it.Price;
      }
      console.log(this.total_price);
    });
  }
}
