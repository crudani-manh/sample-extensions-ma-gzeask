import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemsMock } from '../../services/items.mock'

@Component({
  selector: 'rating-app',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class RatingComponent implements OnInit {

  rating: number;
  ratingPercentage: number;
  itemId: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['ItemId']) {
        this.itemId = params['ItemId'];
        console.log(this.itemId);
        try {
          this.rating = ItemsMock.items[this.itemId].rating;
        } catch (error) {
          this.rating = 0.0;
        }
        console.log(this.rating);
      }
    });
  }

  ngOnInit() {
    if (this.rating < 0) {
      this.ratingPercentage = 0;
    } else if (this.rating > 5) {
      this.ratingPercentage = 100;
    } else {
      this.ratingPercentage = this.rating / 5 * 100;
    }    
  }

}
