import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConvertCurrencyPipe } from '../pipes/convert-currency.pipe';
import { formatCurrency } from '@angular/common';

interface Product {
  nameKey: string;
  quantity: number;
  priceUSD: number;
}

interface Language {
  code: string;
  name: string;
  currency: string;
  locale: string;
}

@Component({
  selector: 'app-table-with-conversion',
  imports: [CommonModule, TranslateModule],
  templateUrl: './table-with-conversion.html',
  styleUrl: './table-with-conversion.css',
})
export class TableWithConversion implements OnInit {
  
  products: Product[] = [
    { nameKey: 'TABLE.PRODUCTS.LAPTOP', quantity: 5, priceUSD: 999.99 },
    { nameKey: 'TABLE.PRODUCTS.SMARTPHONE', quantity: 12, priceUSD: 699.99 },
    { nameKey: 'TABLE.PRODUCTS.HEADPHONES', quantity: 25, priceUSD: 149.99 },
    { nameKey: 'TABLE.PRODUCTS.KEYBOARD', quantity: 18, priceUSD: 79.99 },
    { nameKey: 'TABLE.PRODUCTS.MOUSE', quantity: 30, priceUSD: 49.99 }
  ];

  languages: Language[] = [
    { code: 'en', name: 'English', currency: 'USD', locale: 'en-US' },
    { code: 'dk', name: 'Dansk', currency: 'DKK', locale: 'da-DK' },
    { code: 'ro', name: 'Română', currency: 'RON', locale: 'ro-RO' },
    { code: 'ja', name: '日本語', currency: 'JPY', locale: 'ja-JP' }
  ];

  currentLanguage = signal<Language>(this.languages[0]);
  private convertPipe = new ConvertCurrencyPipe();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
  }

  switchLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translate.use(language.code);
  }

  getCurrentCurrency(): string {
    return this.currentLanguage().currency;
  }

  getCurrentLocale(): string {
    return this.currentLanguage().locale;
  }

  getFormattedPrice(priceUSD: number): string {
    const currency = this.getCurrentCurrency();
    const locale = this.getCurrentLocale();
    const convertedPrice = this.convertPipe.transform(priceUSD, currency);
    
    console.log(`Converting ${priceUSD} USD to ${currency}: ${convertedPrice}`);
    
    try {
      return formatCurrency(
        convertedPrice,
        locale,
        this.getCurrencySymbol(),
        currency,
        '1.2-2'
      );
    } catch (error) {
      console.error('Error formatting currency:', error);
      return `${this.getCurrencySymbol()} ${convertedPrice.toFixed(2)}`;
    }
  }

  getCurrencySymbol(): string {
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'DKK': 'kr',
      'RON': 'lei',
      'JPY': '¥'
    };
    return symbols[this.getCurrentCurrency()] || this.getCurrentCurrency();
  }
}

