import { PaymentService } from './../../services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-custom-payment',
  templateUrl: './available-custom-payment.component.html',
  styleUrls: ['./available-custom-payment.component.css']
})
export class AvailableCustomPaymentComponent implements OnInit {

  selectedOrganization;
  loggedInUser;
  orderId;
  order;
  ccountNo;
  Amount;paymentHeader;

  constructor( private route: ActivatedRoute,
    private paymentService: PaymentService) {
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
      this.paymentHeader = payload['PaymentHeader'];
      this.order = payload['Order'];
      console.log(this.order);
      console.log(this.paymentHeader);
    }
  }

  addCardInfo() {
    // call save API
  }

}

