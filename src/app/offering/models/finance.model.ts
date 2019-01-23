export enum FinanceRowTypes {
  percents = 'percents',
  currency = 'currency',
  type = 'type',
}

export enum FinanceType {
  co_ownership = 'Co-Ownership'
}

export const FINANCIAL_LIST = [
  {
    key: 'market_value',
    name: 'Purchase cost',
    type: FinanceRowTypes.currency,
  },
  {
    key: 'minimum_investment',
    name: 'Min. investment',
    type: FinanceRowTypes.currency,
  },
  {
    key: 'type',
    name: 'Investment type',
    type: FinanceRowTypes.type,
  },
  {
    key: 'loan_to_value',
    name: 'Mortgage(LTV)',
    type: FinanceRowTypes.percents,
  },
  {
    key: 'maturity',
    name: 'Holding Period',
    type: '',
  },
  {
    key: 'annual_yield_or_roi',
    name: 'Expected Return on Equity',
    type: FinanceRowTypes.percents,
  },
];
