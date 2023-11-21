import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { AheaderComponent } from './aheader/aheader.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {A11yModule} from "@angular/cdk/a11y";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatGridListModule} from "@angular/material/grid-list";
import {HighchartsChartModule} from "highcharts-angular";
import {AdHomeComponent} from "./home/home.component";
import {AlbumComponent} from "./album/album.component";


@NgModule({
  declarations: [
    AdHomeComponent,
    LayoutComponent,
    MenuComponent,
    AheaderComponent,
    UsuariosComponent,
    AlbumComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        AppMaterialModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        A11yModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSortModule,
        MatGridListModule,
        HighchartsChartModule
    ],
})
export class AdminModule { }
