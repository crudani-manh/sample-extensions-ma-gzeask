import { Component } from '@angular/core';
import { ItemService } from './services/item.service'
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent implements OnInit { 


  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    
  }

}
