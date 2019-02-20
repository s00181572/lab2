import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  inputs: ['product'],
  host: {'class':'item'},
  template: `
  <app-product-image [product]-producut></app-product-image>
  <div class="content">
  <div class="header">{{ product.name }}</div>
  </div>
  `,
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
product:Product;

  ngOnInit() {
  }

}
