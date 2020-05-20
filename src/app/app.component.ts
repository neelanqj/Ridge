import { Component, ViewChild, OnInit } from '@angular/core';
import { DynamicFormComponent } from './_core/dynamic-form/dynamic-form.component';
import { FieldConfig } from './_core/_models/field.interface';
import { Validators } from '@angular/forms';
import { AlertifyService } from './_services/alertify.service';
import { DisplayService } from './_services/display.service';
import { constants } from '../assets/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  layout: any;
  constructor(private alertify: AlertifyService, private displayService: DisplayService) { }

  ngOnInit() {
      this.displayService.getLeftMainMenu().subscribe(
        res => {
          this.layout = res;
        },
        error => {
          this.alertify.error(constants.errors.leftMenu.msg1);
        }
      );
    }
  }