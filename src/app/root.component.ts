import { Component } from '@angular/core';
import { ItemService } from './services/item.service'
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export class SamplePage {
  title: string;
  url: string;
  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styles: [`li{margin-bottom:1.5rem}`]
})

export class RootComponent implements OnInit {

  samplePages: SamplePage[];

  recommendedURL = 'https://sample-extensions-ma.stackblitz.io/recommended';
  sizechartURL = 'https://sample-extensions-ma.stackblitz.io/sizing';
  ratingURL = 'https://sample-extensions-ma.stackblitz.io/rating';
  replenishURL = 'https://sample-extensions-ma.stackblitz.io/replenish';
  addressURL = 'https://sample-extensions-ma.stackblitz.io/address';
  paymentURL = 'https://sample-extensions-ma.stackblitz.io/payment';
  contactURL = 'https://sample-extensions-ma.stackblitz.io/contact';
  promotionURL = 'https://sample-extensions-ma.stackblitz.io/promotion';
  customerSearchURL = 'https://sample-extensions-ma.stackblitz.io/customersearch';
  shippingTabURL = 'https://sample-extensions-ma.stackblitz.io/shipmentTab';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.samplePages = [
      new SamplePage('Recommended Items:', this.recommendedURL),
      new SamplePage('Size Chart:', this.sizechartURL),
      new SamplePage('Item Ratings:', this.ratingURL),
      new SamplePage('Item Ratings:', this.ratingURL),
      new SamplePage('Replenish:', this.replenishURL),
      new SamplePage('Add Address:', this.addressURL),
      new SamplePage('Add Payment:', this.paymentURL),
      new SamplePage('Contact:', this.contactURL),
      new SamplePage('Promotion:', this.promotionURL),
      new SamplePage('Customer Search:', this.customerSearchURL),
      new SamplePage('Shipping Tab:', this.shippingTabURL)
    ];
  }

}
