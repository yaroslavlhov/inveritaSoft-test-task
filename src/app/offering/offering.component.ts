import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IOffer } from './models/offer.interface';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.scss']
})
export class OfferingComponent implements OnInit {

  public offers: IOffer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe((data: IOffer[]) => {
        this.offers = data;
      });
  }

}
