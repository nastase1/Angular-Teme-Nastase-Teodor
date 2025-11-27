import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { ImageDetail } from './image-detail/image-detail';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'image/:id', component: ImageDetail },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '/404' }
];
