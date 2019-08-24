import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../_core/_models/field.interface';
import { DynamicFormComponent } from '../_core/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static:true }) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  columnDefs= [
    {headerName: 'Make', field: 'make', sortable: true},
    {headerName: 'Model', field: 'model', sortable: true},
    {headerName: 'Price', field: 'price', sortable: true}
  ];
  rowData=[{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000},{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000}];

  submit(value: any) {

    console.log("Is the form dirty? " + this.form.form.dirty);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
