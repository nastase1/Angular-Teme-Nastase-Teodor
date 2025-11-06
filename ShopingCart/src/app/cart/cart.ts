import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartService: CartService) {}

  get cartItems(): Product[] {
    return this.cartService.getItems();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
