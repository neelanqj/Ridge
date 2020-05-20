import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './_core/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './_core/dynamic-field/dynamic-field.directive';
import { CheckboxComponent } from './_core/checkbox/checkbox.component';
import { RadiobuttonComponent } from './_core/radiobutton/radiobutton.component';
import { DateComponent } from './_core/date/date.component';
import { SelectComponent } from './_core/select/select.component';
import { ButtonComponent } from './_core/button/button.component';
import { InputComponent } from './_core/input/input.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './_core/grid/grid.component';

import {AgGridModule} from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ErrorInterceptorProvider } from './_interceptors/error.interceptor';
import { AuthService } from './_services/auth.service';
import { ErrorComponent } from './error/error.component';
import { AlertifyService } from './_services/alertify.service';
import { UploaderComponent } from './uploader/uploader.component';
import { FileService } from './_services/file.service';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
   declarations: [
      AppComponent,
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
      HomeComponent,
      GridComponent,
      PopupComponent,
      ErrorComponent,
      UploaderComponent,
      LogInComponent
   ],
   imports: [
      BrowserModule,
      AgGridModule.withComponents([]),
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      PreventUnsavedChanges,
      ErrorInterceptorProvider,
      FileService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent,
      GridComponent
   ]
})
export class AppModule { }
