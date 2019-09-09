import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomersMock } from '../../services/customers.mock'

@Component({
  selector: 'contact-app',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [HttpClientModule, HttpClient, CustomersMock]
})

export class ContactComponent implements OnInit {

  customerid: string;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['CustomerId']) {
        this.customerid = params['CustomerId'];
        console.log(this.customerid);
      }
    });
  }

  ngOnInit() {

    if (CustomersMock.customers[this.customerid]) {

      this.name = CustomersMock.customers[this.customerid].name;
      this.email = CustomersMock.customers[this.customerid].email;
      this.phoneNumber = CustomersMock.customers[this.customerid].phoneNumber;

      var nameBox = document.getElementById("name");
      nameBox.value = this.name;
      nameBox.disabled = true;
      var emailBox = document.getElementById("email");
      emailBox.value = this.email;
      var phoneNumberBox = document.getElementById("phoneNumber");
      phoneNumberBox.value = this.phoneNumber;
    } 
    
  }

  submitClicked() {
    var nameBox = document.getElementById("name");
    this.name = nameBox.value;
    var emailBox = document.getElementById("email");
    console.log(emailBox)
    this.email = emailBox.value;
    var phoneNumberBox = document.getElementById("phoneNumber");
    this.phoneNumber = phoneNumberBox.value;
    alert("Your new email and phone number are, respectively: " + this.email + ", " + this.phoneNumber);
  }

}
