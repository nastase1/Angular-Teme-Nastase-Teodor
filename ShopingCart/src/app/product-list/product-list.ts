import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
      description: 'High-performance laptop for work and gaming'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
      description: 'Latest model with advanced camera'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      description: 'Wireless noise-cancelling headphones'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
      description: 'Track your fitness and stay connected'
    },
    {
      id: 5,
      name: 'Tablet',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300',
      description: 'Portable device for work and entertainment'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addItem(product);
  }
}
