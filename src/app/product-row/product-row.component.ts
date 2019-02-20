import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-row',
  inputs: ['product'],
  host: {'class':'item'},
  template: `
  <app-product-image [product]-"product"></app-product-image>
  <div class="content">
  <div class="header">{{ product.name }}</div>
  <div class="meta">
  <div class="product-sku">SKU #{{ product.sku }}</di
  
  <div class="description">
  <app-product-department [product]="product"></app-product-department>
  </div>
  </div>

  <app-price-display [price]="product.price"></app-price-display>
  `,
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
product:Product;

  ngOnInit() {
  }

}
