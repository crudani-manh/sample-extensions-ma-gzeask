import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shipment-tab',
  templateUrl: './shipment-tab.component.html',
  styleUrls: ['./shipment-tab.component.css']
})
export class ShipmentTabComponent implements OnInit {

  orderId;

  constructor() { }

  ngOnInit() {
    (<any>window).MAExtension.EditOrderScreen.events.onPageLoad(this.psoOnOrderLoadMethod);
    (<any>window).MAExtension.EditOrderScreen.events.onProceedToPayment(this.editOrderPsoFunctionProceedToPayment);
    (<any>window).MAExtension.EditOrderScreen.events.onPaymentTabSelected(this.editOrderPsoFunctionOnpaymentTabSelected);
    (<any>window).MAExtension.EditOrderScreen.events.onSummaryTabSelected(this.editOrderPsoFunctionOnsummaryTabSelected);
    (<any>window).MAExtension.EditOrderScreen.events.onShippingTabSelected(this.editOrderPsoFunctionOnshippingTabSelected);
  }

  editOrderRefreshPage() {
    (<any>window).MAExtension.EditOrderScreen.actions.reloadPage({ "OrderId": this.orderId });
  }

  editOrderPsoFunctionProceedToPayment(data) {
    var res = confirm("Message from custom iframe. Proceed to payment clicked. Do you really want to proceed?");
    if (res) {
      (<any>window).MAExtension.EditOrderScreen.actions.ackProceedToPayment({ "AckProceedToPaymentBool": true });
    }
  }

  editOrderPsoFunctionOnpaymentTabSelected(data) {
    console.log("Payment Tab Data = " + JSON.stringify(data.payload.Order.this.orderId));
    var tabEle = document.getElementById("shippingId");
    tabEle.innerHTML = data.payload.Order.OrderId;
    this.orderId = data.payload.Order.OrderId;
  }


  editOrderPsoFunctionOnsummaryTabSelected(data) {
    console.log("Summary Tab Data = " + JSON.stringify(data.payload.Order.OrderId));
    var tabEle = document.getElementById("shippingId");
    tabEle.innerHTML = data.payload.Order.OrderId;
    this.orderId = data.payload.Order.OrderId;
  }

  psoOnOrderLoadMethod(data) {
    var orderIdEle = document.getElementById('shippingId');
    orderIdEle.innerHTML = data.payload.Order.OrderId;
    this.orderId = data.payload.Order.OrderId;
  }

  editOrderPsoFunctionOnshippingTabSelected(data) {
    console.log("Shipping Tab Data = " + JSON.stringify(data.payload.Order.OrderId));
    var tabEle = document.getElementById("shippingId");
    tabEle.innerHTML = data.payload.Order.OrderId;
    this.orderId = data.payload.Order.OrderId;
  }


}