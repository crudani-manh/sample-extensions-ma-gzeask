import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'example-app',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class ExampleComponent implements OnInit {

  exampleText: string;

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.exampleText = "Example created!";
    console.log(this.exampleText);
  }

}
