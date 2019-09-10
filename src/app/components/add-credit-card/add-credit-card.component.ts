import { Address } from './../../models/address.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent implements OnInit {

  selectedOrganization;
  loggedInUser;
  orderId;
  order;
  shippingAddress;
  paymentHeader;
  paymentType;
  address = new Address();
  isSameAsShipping: boolean;

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['selectedOrganization']) {
        this.selectedOrganization = params['selectedOrganization'];
        this.loggedInUser = params['loggedInUser'];
        this.orderId = params['orderId'];
      }
    });
  }

  ngOnInit() {
    if ((<any>window).MAExtension) {
      (<any>window).MAExtension.EditOrderScreen.events.onAddCreditCardExpanded(this.psoAddCreditCardExpandMethod.bind(this));
    }
  }

  psoAddCreditCardExpandMethod(data) {
    if (data && data.payload) {
      const payload = data.payload;
      this.order = payload['Order'];
      this.shippingAddress = payload['ShippingAddress'];
      this.paymentHeader = payload['PaymentHeader'];
      this.paymentType = payload['PaymentType'];
    }
  }

  fillFullAddress(saveAddress: any) {
    this.address.FirstName = saveAddress.FirstName;
    this.address.LastName = saveAddress.LastName;
    this.address.Address1 = saveAddress.Address1;
    this.address.Address2 = saveAddress.Address2;
    this.address.Address3 = saveAddress.Address3;
    this.address.City = saveAddress.City;
    this.address.State = saveAddress.State;
    this.address.Country = saveAddress.Country;
    this.address.PostalCode = saveAddress.PostalCode;
    this.address.Phone = saveAddress.Phone;
    this.address.Email = saveAddress.Email;
  }

  changeBillingAddress() {
    if (this.isSameAsShipping && this.shippingAddress) {
      this.fillFullAddress(this.shippingAddress);
    }
  }

}
