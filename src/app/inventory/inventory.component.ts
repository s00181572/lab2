import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-inventory',
  template:
  `
  <div class="app-inventory">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
  `,
  
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
product:Product;
  constructor() {
    this.product = new Product('MySHOES',
    'Black Running Shoes',
    'assets/images/products/black-shoes.jpg',
    ['Men','Shoes','Running Shoes'],
    109.99),
    new Product('MEATOJACKET',
    'Blue Jacket',
    'assets/images/products/blue-jacket.jpg',
    ['Women','Apparel','Jackets & Shirts'],
    109.99),
    new Product('NICEHAT',
    'A Nice Black Hat',
    'assets/images/products/black-hat.jpg',
    ['Men','Accessories','Hat'],
    109.99)
   }

  ngOnInit() {
  }

}
