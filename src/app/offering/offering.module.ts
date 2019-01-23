import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferingComponent } from './offering.component';
import { DataService } from './services/data.service';
import { OfferItemComponent } from './components/offer-item/offer-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OfferingComponent, OfferItemComponent],
  providers: [DataService],
  exports: [OfferingComponent]
})
export class OfferingModule { }
