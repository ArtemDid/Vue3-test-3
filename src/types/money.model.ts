export interface CurrencyValue {
  value: number
  currency: Currency | string
}

export enum Currency {
  USD = 'USD',
  PLN = 'PLN',
  EUR = 'EUR',
  BTC = 'BTC',
}
