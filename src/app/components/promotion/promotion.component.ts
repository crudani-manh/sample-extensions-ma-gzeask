//https://codepen.io/farmok/pen/YPMqNP
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PromotionsMock } from '../../services/promotions.mock';

@Component({
  selector: 'promotion-app',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class PromotionComponent implements OnInit {

  promotionArray: any[];

  constructor(private route: ActivatedRoute) {
    var promotions = PromotionsMock.promotions;
    var promotionArray = Object.keys(promotions).map(i => promotions[i]);
    this.promotionArray = promotionArray;
    console.log(this.promotionArray);
  }

  ngOnInit() {
  }

}