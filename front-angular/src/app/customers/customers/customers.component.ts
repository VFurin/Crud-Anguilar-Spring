import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from './../model/customer';
import { CustomersService } from './../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<Customer[]>;
  displayedColumns = ['name', 'phone'];

  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.customersList();
  }

  ngOnInit(): void {
  }

}
