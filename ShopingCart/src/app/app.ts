import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShopingCart');
}
