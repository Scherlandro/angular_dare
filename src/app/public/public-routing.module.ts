import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import {DistrictComponent} from "./district/district.component";

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      {path: 'district', component: DistrictComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
