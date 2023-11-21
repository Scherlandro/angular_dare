import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from "./app-material/app-material.module";
import {A11yModule} from "@angular/cdk/a11y";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    A11yModule,
    FormsModule
  ],
  exports:[]
})
export class SharedModule { }
