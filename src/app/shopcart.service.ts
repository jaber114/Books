import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopcartService {
products:any=[]
total_price:number=0;
count : number=0;
addproduct(product:any)
{
  let flag=false;
  if(this.products)
  {
    for(let i of this.products)
    {
      if(i.SerialNumber==product.SerialNumber)
      {
             flag=true;
      }
    }
  }
  if(!flag)
  {
    this.products.push(product);
    alert("the product has added successfuly to the shopping cart");
  }
}
getproduct()
{
  return this.products;
}
getcount()
{
  this.count=0;
  for(let i of this.products)
  {
    this.count-=-1;
   
    
  }
  return this.count;
 

}
getprince_total()
{
  this.total_price=0;
  for(let i of this.products)
  {
    this.total_price+=i.Price;
  }
  return "your total price is" + " " + this.total_price + " " + "your total product quantity is" +" " +this.getcount();
  
  
}

  constructor() { }
}
