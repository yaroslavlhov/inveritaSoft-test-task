import { Component, OnInit, Input } from '@angular/core';
import { IOffer } from '../../models/offer.interface';
import { FinanceRowTypes, FinanceType, FINANCIAL_LIST } from '../../models/finance.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input() offer: IOffer;
  @Input('is-big') isBig: boolean;

  financialList = FINANCIAL_LIST;
  financeRowTypes = FinanceRowTypes;
  isCompleted: boolean;

  constructor() { }

  ngOnInit() {
    this.offer.financial.type = this.offer.type;
    this.isCompleted = !this.offer.financial.available_to_invest;
  }

  geBackgroundImage(url: string): string {
    return `url(${url}&filters=c_scale,q_60,w_720)`;
  }

  formatFinanceValue(value: number | string, type: string): string {
    value = value.toString();
    switch (type) {

      case FinanceRowTypes.percents:
        return `${value}%`;

      case FinanceRowTypes.type:
        return FinanceType[value];

      case FinanceRowTypes.currency: {
        const currencyValue = this.formatCurrencyValue(value);
        return `CHF ${currencyValue}`;
      }
      default:
        return value;
    }
  }

  getProgress(): string {
    return `${100 - this.offer.financial.available_to_invest * 100 / this.offer.financial.investment_goal}%`;
  }

  formatCurrencyValue(str: string): string {
    const reverseString = str.split('').reverse().join('');
    const reverseFormat = reverseString.match(/.{1,3}/g).join('’');
    return reverseFormat.split('').reverse().join('');
  }

}
