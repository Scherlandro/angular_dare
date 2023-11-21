import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorComponent} from "./utils/error/error.component";
import {AppMaterialModule} from "./shared/app-material/app-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRouting} from "./app.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRippleModule} from "@angular/material/core";
import {PublicModule} from "./public/public.module";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./auth/guards/auth.guard.ts";
import {BaseService} from "./services/base.service";
import {TokenInterceptorProvider} from "./services/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatRippleModule,
    PublicModule
  ],
  providers: [AuthService, AuthGuard, BaseService,TokenInterceptorProvider ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
