import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { emit } from 'cluster';

@Component({
  selector: 'app-product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <app-product-row
      ngFor*="let myProduct of productList"
      [product]="myProduct"
      (click)=clicked(myProduct)
      [class.selected]-"isSelected(myProduct)">
    </app-product-row>
  </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[];

  onProductSelected:EventEmitter<Product>;

  private currentProduct: Product;
  constructor() { }

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
  
  ngOnInit() {
  }

}
