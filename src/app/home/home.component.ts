import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any=[]
  constructor(private ProductService:ProductsService) { }

  ngOnInit(): void {
    this.products=this.ProductService.getSeries();
  }

}
