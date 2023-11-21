import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {AdHomeComponent} from "./home/home.component";
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'adHome', component: AdHomeComponent},
      { path: '', redirectTo: 'adHome', pathMatch: 'full'},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'album', component: AlbumComponent},
      {
        path: 'dialogs', loadChildren: () => import('./diologs/dialogs.module')
          .then(m => m.DialogsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
