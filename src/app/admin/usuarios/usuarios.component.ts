import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import {FormControl} from '@angular/forms';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogUsuarioComponent} from "../diologs/dialog-usuario/dialog-usuario.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  @ViewChild(MatTable) tableUser!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id_usuario','nome_usuario','email','opicoes'];
  tbSourceUsuarios$ = new MatTableDataSource<IUser>();
  usuarioControl = new FormControl();
  usuariosFiltrados: IUser[]=[];

  constructor(public dialog: MatDialog,
              private userService: UserService
              ) {
  }

  ngOnInit(): void {

  }
  onMatSortChange(){
    this.tbSourceUsuarios$.sort = this.sort;
  }

  listarUsuarios(){
    this.userService.getAllUsers().subscribe(
      (result: IUser[]) => {
        this.tbSourceUsuarios$.data = result;
      });
  }

  aplicarFiltro(valor:string){
    valor = valor.trim().toLowerCase();
    this.tbSourceUsuarios$.filter = valor;
  }

  openDialogo(eventUser: IUser) {
    console.log("Dados do elementoDialog", eventUser)
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DialogUsuarioComponent, {
      width: '300px',
      data: eventUser === null ? {
        id: null,
        name: '',
        username: '',
        password: ''
      } : {
        id: eventUser.id,
        name: eventUser.name,
        username: eventUser.username,
        password: eventUser.password
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if (this.tbSourceUsuarios$.data
          .map(p => p.id).includes(result.id)) {
          this.userService.editarUsuario(result)
            .subscribe((data: IUser) => {
              const index = this.tbSourceUsuarios$.data
                .findIndex(p => p.id === data.id);
              this.tbSourceUsuarios$.data[index] = data;
              this.tableUser.renderRows();
            });
        } else {
          this.userService.createUsuario(result)
            .subscribe((data: IUser) => {
              this.tbSourceUsuarios$.data.push(result);
              this.tableUser.renderRows();
            });
        }}});
  }

  editarElement(eventUser: IUser){
    this.openDialogo(eventUser);
  }

  deleteElement(id: number) {
    if(confirm('Tem certeza em REMOVER este usuário ?')) {
      this.userService.deleteUsuario(id)
        .subscribe((data: IUser) => {
          this.tbSourceUsuarios$.data.pop();
          this.tableUser.renderRows();
        });
    }
  }


}
