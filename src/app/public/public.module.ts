import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {PublicRoutingModule} from './public-routing.module';
import {PlayoutComponent} from './playout/playout.component';
import {PheaderComponent} from './pheader/pheader.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { DistrictComponent } from './district/district.component';
import { PrevDirective } from './district/prev.directive';
import { NextDirective } from './district/next.directive';
import {AppMaterialModule} from "../shared/app-material/app-material.module";

@NgModule({
  declarations: [
    HomeComponent,
    PlayoutComponent,
    PheaderComponent,
    DistrictComponent,
    PrevDirective,
    NextDirective
  ],
  exports: [
    PlayoutComponent,
    PheaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatBottomSheetModule
  ]
})
export class PublicModule {
}
