import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'replenish-app',
  templateUrl: './replenish.component.html',
  styleUrls: ['./replenish.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class ReplenishComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  buttonClicked(option) {
    console.log(option);
  }

}
