import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerSearch } from '../../models/customer-search.model'

@Component({
  selector: 'customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})

export class CustomerSearchComponent implements OnInit {

  formModel;
  route: string;
  constructor() { }

  ngOnInit() {
    if ((<any>window).AppRoutes) {
      this.route = (<any>window).AppRoutes.CUSTOMER_DASHBOARD;
    }
    this.formModel = new CustomerSearch();
  }

  onSearch() {
    const query = this.formModel;
    const payload = { Route: this.route, QueryParams: query };
    (<any>window).MAExtension.Application.actions.route(payload);
  }

}
