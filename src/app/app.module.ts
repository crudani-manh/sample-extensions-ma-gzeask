import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule }  from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { RootComponent } from './root.component';
import { RecComponent } from './components/rec/rec.component';
import { SizeComponent } from './components/size/size.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReplenishComponent } from './components/replenish/replenish.component';
import { AddressComponent } from './components/address/address.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ExampleComponent } from './components/example/example.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { ShipmentTabComponent } from './components/shipment-tab/shipment-tab.component';



export const sampleIframeExtns = [    
  RecComponent, 
  SizeComponent, 
  RatingComponent, 
  ReplenishComponent,
  AddressComponent, 
  CardComponent, 
  ContactComponent, 
  PromotionComponent, 
  ExampleComponent,
  CustomerSearchComponent 
];

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [ 
    AppComponent, RootComponent, 
    ...sampleIframeExtns, ShipmentTabComponent
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ RootComponent,
    ...sampleIframeExtns
  ]

})

export class AppModule { }

