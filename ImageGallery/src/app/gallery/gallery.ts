import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Image {
  id: number;
  title: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery {
  searchTerm: string = '';
  
  images: Image[] = [
    {
      id: 1,
      title: 'Nardo Gray Supercar',
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      description: 'A stunning matte gray sports car showcasing premium automotive design and engineering excellence.'
    },
    {
      id: 2,
      title: 'Forest Landscape',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      description: 'Deep green forest with towering trees creating a serene and peaceful natural environment.'
    },
    {
      id: 3,
      title: 'Mountain Peak',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Majestic snow-capped mountain peak against a pristine white sky, embodying natural beauty.'
    },
    {
      id: 4,
      title: 'Luxury Architecture',
      url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800',
      description: 'Modern minimalist architecture featuring clean white lines and sophisticated gray accents.'
    },
    {
      id: 5,
      title: 'Emerald Waters',
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
      description: 'Crystal clear dark green waters reflecting the beauty of untouched nature.'
    },
    {
      id: 6,
      title: 'Urban Minimalism',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      description: 'Sleek urban design with premium gray tones and sophisticated architectural details.'
    },
    {
      id: 7,
      title: 'Northern Lights',
      url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
      description: 'Breathtaking aurora borealis with deep green hues dancing across the night sky.'
    },
    {
      id: 8,
      title: 'Minimalist Interior',
      url: 'https://images.unsplash.com/photo-1502672260066-6bc355bd3aeb?w=800',
      description: 'Premium white interior design with subtle gray accents creating a peaceful atmosphere.'
    }
  ];

  get filteredImages(): Image[] {
    if (!this.searchTerm) {
      return this.images;
    }
    return this.images.filter(img => 
      img.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
