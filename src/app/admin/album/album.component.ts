import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, NgForm, Validators} from "@angular/forms";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DistrictService} from "../../services/district.service";


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlbumComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  pageEvent!: PageEvent;
  dispColHeader: string[] = ['foto'];
  tbHeader$ = new MatTableDataSource<any[]>();

  @ViewChild(MatPaginator, {static: true}) paginar!: MatPaginator;
  pageEvt!: PageEvent ;
  dispColDescr: string[] = ['foto','descricao'];
  tbDescription$ = new MatTableDataSource<any>();

  constructor(
            private districtservice: DistrictService
  ) { }

  ngOnInit(): void {
    this.listarImagens();
    this.tbHeader$.paginator = this.paginator;
    this.tbDescription$.paginator = this.paginar;
   }

  listarImagens(){
  /*  this.itensDaVdService.getTodosItensDasVendas()
      .pipe().subscribe(   (data: iItensVd[]) => {
      this.tbSourceItensDaVd$.data = data;
   //   this.tbSourceItensDaVd$.paginator = this.paginator;
    });*/
    this.districtservice.topImagens().subscribe(res =>{
      console.log('Descrição-->',res);
      this.tbHeader$.data = res;
      this.tbDescription$.data = res;
    })
  }


}
