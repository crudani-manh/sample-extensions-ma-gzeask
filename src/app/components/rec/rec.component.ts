import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rec-app',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.css'],
  providers: [ItemService, HttpClientModule, HttpClient]
})

export class RecComponent implements OnInit {

  Order;
  Item;
  Quantity;
  CallCenterConfigData;

  itemId: string;
  recItems: any[];
  itemsToCart: any[];

  constructor(public itemService: ItemService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['ItemId']) {
        this.itemId = params['ItemId'];
        console.log(this.itemId);
        this.setRecommendedItems(this.itemId);
      }
    });
  }

  ngOnInit() {
    (<any>window).MAExtension.ItemSearchScreen.events.onItemLoad(this.itemSearchItemLoad);
    (<any>window).MAExtension.ItemSearchScreen.events.onAddItem(this.onAddItemEvent);
    (<any>window).MAExtension.ItemSearchScreen.events.onItemAdded(this.onItemAdded);
    (<any>window).MAExtension.ItemSearchScreen.events.onAddItemAndCheckout(this.onAddItemAndCheckoutEvent);
    (<any>window).MAExtension.ItemSearchScreen.events.onItemAddedAndCheckedOut(this.onItemAddedAndCheckedOut);
    (<any>window).MAExtension.ItemSearchScreen.events.onCheckout(this.onCheckout);
  }

  itemSearchItemLoad = function itemSearchItemLoad(data) {
    this.Order = data.payload.Order;
    this.Item = data.payload.Item;
    this.Quantity = data.payload.Quantity;
    if (data.payload.CallCenterConfigData) {
      this.CallCenterConfigData = data.payload.CallCenterConfigData;
    }
  }


  prepareOrderLine(itemId) {
    if (this.Order) {
      this.Order.SellingChannel = {
        SellingChannelId: this.CallCenterConfigData.DefaultSellingChannelId
      };
      this.Order.CurrencyCode = this.CallCenterConfigData.DefaultCurrencyCode;
      if (!this.Order.OrderId) {
        this.Order["OrderType"] = { "OrderTypeId": this.CallCenterConfigData.DefaultOrderType };
      }
    }
    if (!this.Order.DocTypeId) {
      this.Order["DocType"] = { "DocTypeId": "CustomerOrder" };
    }
    this.Order.OrderLine = this.createLineObject(itemId);
  }
  createLineObject(itemId) {
    var orderLine = [];
    orderLine.push({ "ItemId": itemId, "UOM": this.Item.BaseUOM, "Quantity": this.Quantity });
    return orderLine[0];
  }
  addItemAction() {
    this.prepareOrderLine(this.itemId);
    (<any>window).MAExtension.ItemSearchScreen.actions.addItem(this.Order);
  }

  addItemAndCheckoutAction() {
    this.prepareOrderLine(this.itemId);
    (<any>window).MAExtension.ItemSearchScreen.actions.addItemAndCheckout(this.Order);
  }

  onAddItemEvent(data) {
    var res = confirm("Message from custom iframe. Add Item clicked. Do you really want to proceed?");
    if (res) {
      (<any>window).MAExtension.ItemSearchScreen.actions.ackAddItem({ "ackAddItemBool": true, "Order": data.payload.Order, "OrderLine": data.payload.OrderLine });
    }
  }

  onItemAdded(data) {
    alert("Message from custom iframe. Item added to cart");
  }

  onAddItemAndCheckoutEvent(data) {
    var res = confirm("Message from custom iframe. Add & Checkout Item clicked. Do you really want to proceed?");
    if (res) {
      (<any>window).MAExtension.ItemSearchScreen.actions.ackAddItemAndCheckout({ "ackAddItemAndCheckoutBool": true, "Order": data.payload.Order, "OrderLine": data.payload.OrderLine, "isUnEvenExchange": data.payload.isUnEvenExchange });
    }
  }

  onItemAddedAndCheckedOut(data) {
    var res = confirm("Message from custom iframe. Item has been added and checked out. Do you really want to proceed?");
    if (res) {
      (<any>window).MAExtension.ItemSearchScreen.actions.ackItemAddedAndCheckedOut({ "ackItemAddedAndCheckedOutBool": true, "Order": data.payload.Order, "OrderLine": data.payload.OrderLine, "isUnEvenExchange": data.payload.isUnEvenExchange });
    }
  }

  onCheckout(data) {
    var res = confirm("Message from custom iframe. Checkout clicked. Do you really want to proceed?");
    if (res) {
      (<any>window).MAExtension.ItemSearchScreen.actions.ackCheckout({ "ackCheckoutBool": true, "Order": data.payload.Order, "OrderLine": data.payload.OrderLine });
    }
  }


  setRecommendedItems(itemId: string) {
    this.recItems = this.itemService.getRecommendedItems(itemId);
    console.log(this.recItems);
  }

  buttonClicked(itemId) {
    console.log(itemId);
    this.itemId = itemId;
    alert(this.itemId + " has been added to cart.");
  }
}