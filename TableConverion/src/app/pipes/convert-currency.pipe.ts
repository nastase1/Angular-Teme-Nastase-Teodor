import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency',
  standalone: true
})
export class ConvertCurrencyPipe implements PipeTransform {
  
  private conversionRates: { [key: string]: number } = {
    'USD': 1,
    'EUR': 0.92,      // Euro
    'DKK': 6.87,      // Danish Krone
    'RON': 4.55,      // Romanian Leu
    'JPY': 149.50     // Japanese Yen
  };

  transform(value: number, targetCurrency: string = 'USD'): number {
    if (!value || !targetCurrency) {
      return value;
    }

    const rate = this.conversionRates[targetCurrency.toUpperCase()] || 1;
    return value * rate;
  }
}
