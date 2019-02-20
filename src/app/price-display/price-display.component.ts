import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  inputs: ['price'],
  template:`
  <div class="app-price-display">£{{price}}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
price:number;

  ngOnInit() {
  }

}
