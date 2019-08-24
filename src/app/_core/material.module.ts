import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    CommonModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    CommonModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
