import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product;

  onProductSelected:EventEmitter<Product>;
  constructor() { }

  ngOnInit() {
  }

}
