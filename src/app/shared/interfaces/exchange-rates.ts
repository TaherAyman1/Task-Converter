import { StringNumberPair } from 'src/app/shared/interfaces/string-number-pair';

export interface ExchangeRates {
  access_key: string;
  base: string;
  rates: StringNumberPair;
}
