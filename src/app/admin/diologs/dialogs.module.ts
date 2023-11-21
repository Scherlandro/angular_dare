import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component';
import {AppMaterialModule} from "../../shared/app-material/app-material.module";



@NgModule({
  declarations: [
    DialogUsuarioComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
})
export class DialogsModule { }
