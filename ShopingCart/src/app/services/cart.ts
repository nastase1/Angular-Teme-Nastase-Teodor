import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() { }

  addItem(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
