import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class UserModule { }
