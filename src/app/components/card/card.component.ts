import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'card-app',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class CardComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

}
