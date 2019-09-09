import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemsMock } from '../../services/items.mock'

@Component({
  selector: 'size-app',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class SizeComponent implements OnInit {

  itemId: string; 
  category: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['ItemId']) {
        this.itemId = params['ItemId'];
        console.log(this.itemId);
      }
    });
  }

  ngOnInit() {
    if (ItemsMock.items[this.itemId] !== undefined) {
      this.category = ItemsMock.items[this.itemId].productClass;
    }
    console.log(this.category);
    
  }

}
