import { Injectable } from '@angular/core';
import { MappedCurrencyRate } from '../interfaces/currency-rate';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {
  public exchangeRates: MappedCurrencyRate[];

  public fromCurrencies: string[] = [];
  public toCurrencies: string[] = [];

  constructor() { }
}
