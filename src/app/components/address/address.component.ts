import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'address-app',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [HttpClientModule, HttpClient]
})

export class AddressComponent implements OnInit {
  firstName='';
  lastName='';
  address='';
  city='';
  country='';
  state='';
  zipCode='';
  email='';
  phoneNumber='';

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  submitButtonClicked(form) {
    //This prints all the values of the form.
    console.log(form.form.value);
  }


  evaluateZipCode(event: any) {
    var zip = document.getElementById("zip-code");

    console.log(document.getElementById("addButton"));
    if (zip.value.length != 5) {
      document.getElementById("wrongZip").style.visibility = "visible";
    } else {
      document.getElementById("wrongZip").style.visibility = "hidden";
    }
  }

  clearButtonClicked() {
    var btn = document.getElementById("addButton");
    btn.disabled = true;
    console.log(form.value);
  }



}
