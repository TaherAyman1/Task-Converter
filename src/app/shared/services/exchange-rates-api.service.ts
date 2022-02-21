import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../interfaces/exchange-rates';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApiService {
  constructor(private http: HttpClient) { }

  getLatestExchangeRates(baseCurrency: string, quoteCurrency = ''): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(
      `${environment.baseUrl}latest?access_key=55314d50d3c827b4f868cf8a2473b968&
      base=${baseCurrency}&symbols=${quoteCurrency}`
    );
  }
}
