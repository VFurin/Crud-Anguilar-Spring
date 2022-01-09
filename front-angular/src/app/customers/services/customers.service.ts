import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Customer } from '../model/customer';
import { delay, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private readonly API = '/assets/customers.json';

  constructor(private httpClient: HttpClient) { }

  customersList(){
    return this.httpClient.get<Customer[]>(this.API)
    .pipe(
      first(),
      delay(4000)
    );
  }
}

