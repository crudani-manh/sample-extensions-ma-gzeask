import { Injectable } from '@angular/core';
import { RestUtil } from './rest.util';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private listCardTypes = '/api/customerengagementfacade/payment/cardType';

  constructor(private restUtil: RestUtil,
    private http: HttpClient) { }

  getCardTypes(selectedOrganization?: string): Observable<any> {
    const url = this.restUtil.constructUrl(this.listCardTypes)
    const headers: HttpHeaders = this.restUtil.getHeaders(selectedOrganization);
    return this.http.get(url, { headers: headers });
    // .pipe(
    //   map(this.restUtil.extractJSON),
    //   catch((error) => {
    //     return this.restUtil.handleError(error);
    //   })
    // );

  }
}
