import { PaymentService } from './../../services/payment.service';
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
  cardType = 'Visa';
  gatewayInfo = {
		"Messages": null,
		"ProfileId": "ecomorg",
		"PerformsStandaloneRefunds": true,
		"UpdatedTimestamp": "2019-07-03T05:05:41.365",
		"Account": [],
		"CreatedBy": "admin@ecomorg.com",
		"CreatedTimestamp": "2019-07-03T05:05:41.365",
		"Actions": {},
		"Extended": {},
		"GatewayId": "Simulator",
		"GatewayAttribute": [{
			"Actions": {},
			"PK": "1724239562130341366",
			"CreatedBy": "admin@ecomorg.com",
			"CreatedTimestamp": "2019-07-03T05:05:41.367",
			"UpdatedBy": "admin@ecomorg.com",
			"UpdatedTimestamp": "2019-07-03T05:05:41.367",
			"Messages": null,
			"ProfileId": "ecomorg",
			"ParentGateway": {
				"PK": "9072238562130341365"
			},
			"Name": "TOKEN_WINDOW_HEIGHT",
			"Value": "280",
			"Extended": {}
		}, {
			"Actions": {},
			"PK": "2839240562130341368",
			"CreatedBy": "admin@ecomorg.com",
			"CreatedTimestamp": "2019-07-03T05:05:41.369",
			"UpdatedBy": "admin@ecomorg.com",
			"UpdatedTimestamp": "2019-07-03T05:05:41.369",
			"Messages": null,
			"ProfileId": "ecomorg",
			"ParentGateway": {
				"PK": "9072238562130341365"
			},
			"Name": "TOKEN_WINDOW_WIDTH",
			"Value": "360",
			"Extended": {}
		}, {
			"Actions": {},
			"PK": "4915241562130341369",
			"CreatedBy": "admin@ecomorg.com",
			"CreatedTimestamp": "2019-07-03T05:05:41.369",
			"UpdatedBy": "admin@ecomorg.com",
			"UpdatedTimestamp": "2019-07-03T05:05:41.369",
			"Messages": null,
			"ProfileId": "ecomorg",
			"ParentGateway": {
				"PK": "9072238562130341365"
			},
			"Name": "TOKEN_USE_HTTPS",
			"Value": "false",
			"Extended": {}
		}],
		"UpdatedBy": "admin@ecomorg.com",
		"GatewayEncryptedAttribute": [],
		"PK": "9072238562130341365",
		"IsBase": true
	};

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
      this.shippingAddress = payload['ShippingAddress'];
      this.paymentHeader = payload['PaymentHeader'];
      this.paymentType = payload['PaymentType'];
    }
  }

  addCardInfo() {
    const payload = {};
    payload['BillingAddress']= this.address;
    payload['GatewayInfo']= this.gatewayInfo;
    payload['CardTypeId']= this.cardType;
    (<any>window).MAExtension.EditOrderScreen.actions.addCreditCardInfo(payload);
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
