import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AppMaterialModule} from "../shared/app-material/app-material.module";



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
      AppMaterialModule
    ]
})
export class AuthModule { }
