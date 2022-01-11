import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from './../model/customer';
import { CustomersService } from './../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers$: Observable<Customer[]>;
  displayedColumns = ['name', 'phone', 'status'];

  constructor(
    private customersService: CustomersService,
    public dialog: MatDialog
    ) {
    this.customers$ = this.customersService.customersList()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os clientes!')
        return of([])
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

}
