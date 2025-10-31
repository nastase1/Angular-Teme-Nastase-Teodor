import { Routes } from '@angular/router';
import { TableWithConversion } from './table-with-conversion/table-with-conversion';

export const routes: Routes = [
  { path: '', component: TableWithConversion },
  { path: '**', redirectTo: '' }
];
