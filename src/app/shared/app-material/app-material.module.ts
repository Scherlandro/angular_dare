import { NgModule } from '@angular/core';


import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from "@angular/material/tabs";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource} from "@angular/material/table"
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {A11yModule} from "@angular/cdk/a11y";

@NgModule({
 exports: [
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatFormFieldModule,
   MatSelectModule,
   MatOptionModule,
   MatTableModule,
   MatButtonToggleModule,
   MatMenuModule,
   MatAutocompleteModule,
   MatInputModule,
   MatCardModule,
   MatExpansionModule,
   MatProgressSpinnerModule,
   MatTabsModule,
   MatListModule,
   MatDialogModule,
   MatDatepickerModule,
   FormsModule,
   A11yModule
 ],

})
export class AppMaterialModule { }
