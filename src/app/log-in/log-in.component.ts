import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../_core/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../_core/_models/field.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static:true }) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
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
      type: "button",
      label: "Log In"
    }
  ];

  submit(value: any) {

    console.log("Is the form dirty? " + this.form.form.dirty);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
