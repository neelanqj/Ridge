import { Injectable, HostListener } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DynamicFormComponent } from '../_core/dynamic-form/dynamic-form.component';


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<any>{
  @HostListener('window:beforeunload')
  canDeactivate(component: any){
    if(component.form.dirty){
      return confirm('Are you sure that you want to continue? Any unsaved changes will be lost.');
    }
    return true;
  }
}
