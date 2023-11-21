import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IUser} from "../../../interfaces/user";
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-dialog-usuario',
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.css']
})
export class DialogUsuarioComponent implements OnInit {

  isChange: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public userDialog: IUser,
    public dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService
  ) {}


  ngOnInit(): void {
    console.log('ID do Dialog Usuario ', this.userDialog.id)
    if (this.userDialog.id != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  createUser() {
    const dialogRef = this.dialog.open(DialogUsuarioComponent, {
      width: '300px',
      data: this.userDialog === null ? {
        id: '',
        name: '',
        username: '',
        password: ''
      } : {
        id: this.userDialog.id,
        name: this.userDialog.name,
        username: this.userDialog.username,
        password: this.userDialog.password
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log("Dados do elementoDialog", result)
       let resp = this.authService.saveUser(result);
      if(resp){
        confirm('Salvo em CHACHE')
      }
      }
    });

  }

  onCancel(): void {
    this.dialog.closeAll();
  }

}
