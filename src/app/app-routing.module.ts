import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ErrorComponent } from './error/error.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent, canDeactivate: [PreventUnsavedChanges] },
  { path: 'log-in', component: LogInComponent, pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
