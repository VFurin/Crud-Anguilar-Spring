import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:[null],
      phone: [null],
      email: [null],
    });
   }
  ngOnInit(): void {

  }

  onSubmit(){
    console.log('Salvar')
  }

  onCancel(){
    console.log("Cancelar")
  }

}
