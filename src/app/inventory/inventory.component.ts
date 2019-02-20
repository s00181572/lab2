import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-inventory',
  template:
  `
  <div class="app-inventory">
    <app-product-list
      [productlist]="products"
      (OnProductSelected)="productWasSelected($event)">
    </app-product-list>
  </div>
  `,
  
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
products:Product[];
  constructor() {
    this.products = [new Product('MySHOES',
    'Black Running Shoes',
    'assets/images/products/black-shoes.jpg',
    ['Men','Shoes','Running Shoes'],
    109.99),
    new Product('MEATOJACKET',
    'Blue Jacket',
    'assets/images/products/blue-jacket.jpg',
    ['Women','Apparel','Jackets & Shirts'],
    238.99),
    new Product('NICEHAT',
    'A Nice Black Hat',
    'assets/images/products/black-hat.jpg',
    ['Men','Accessories','Hat'],
    29.99)];
   }

  productWasSelected(product: Product): void{
    console.log('Product clicked: ', product);
  }

  ngOnInit() {
  }

}
