import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
products:any=[];
select:string=" ";
showprod:boolean=false;
showkids()
{
  this.select='Kids';
  this.showprod=true;

}
showcook()
{
  this.select='Cook';
  this.showprod=true;

}
showdrama()
{
  this.select='Drama';
  this.showprod=true;

}
showscience()
{
  this.select='Science';
  this.showprod=true;

}
 constructor(private ProductsService:ProductsService) { }
//select:string
  ngOnInit(): void {
    this.products=this.ProductsService.getSeries();
  }

}
