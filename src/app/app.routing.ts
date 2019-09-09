import { Routes } from '@angular/router'
import { AppModule } from './app.module';
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

export const APP_ROUTES: Routes = [
  { path: '',
    component: RootComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'recommended',
    component: RecComponent,
    data: { title: 'recomended items' }
  },
  { path: 'sizing',
    component: SizeComponent,
    data: { title: 'sizing' }
  }, 
  { path: 'rating',
    component: RatingComponent,
    data: { title: 'rating'}
  },
  { path: 'replenish',
    component: ReplenishComponent,
    data: { title: 'replenish'}
  },
  { path: 'address',
    component: AddressComponent,
    data: { title: 'address'}
  },
  { path: 'payment',
    component: CardComponent,
    data: { title: 'payment'}
  },
  { path: 'contact',
    component: ContactComponent,
    data: { title: 'contact'}
  },
  { path: 'promotion',
    component: PromotionComponent,
    data: { title: 'promotion'}
  },
  { path: 'example',
    component: ExampleComponent,
    data: { title: 'example'}
  },
  {
    path: 'customersearch',
    component: CustomerSearchComponent,
    data: {title: 'customersearch'}
  },
  {
    path: 'shipmentTab',
    component: ShipmentTabComponent,
    data: {title: 'ShipmentTab'}
  }
];