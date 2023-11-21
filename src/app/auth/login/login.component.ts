import {Component, OnInit, ViewChild} from '@angular/core';
import {ICredential} from 'src/app/interfaces/credential';
import {AuthService} from 'src/app/services/auth.service';
import {TokenService} from 'src/app/services/token.service';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../services/user.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {IUser} from "../../interfaces/user";
import {DialogUsuarioComponent} from "../../admin/diologs/dialog-usuario/dialog-usuario.component";
import {delay} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(MatTable) tableUser!: MatTable<any>;
  tbSourceUsuarios$ = new MatTableDataSource<IUser>();
  showErrorMessage: any = '';
  spiner = false;
  formLogin!: FormGroup;
  form: ICredential = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private userService: UserService,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
  }

  criarFormLogin(): FormGroup {
    return this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void {

    let valuser = JSON.parse(<string>localStorage.getItem('token'))
    this.spiner = true;
    if (!valuser) {
      this.showErrorMessage = 'Usuario não existe';
    } else if (valuser.username == this.form.username
      && valuser.password == this.form.password) {
      this.authService.login(this.form).pipe(delay(1500))
        .subscribe(
          resp => {
            delay(5000)
            this.clearInput();
            this.spiner = false;
          });
    } else
      this.showErrorMessage = 'Usuario ou senha invalidos!'
  }


  statusMessage(typeErro: any) {
    if (typeErro.status == '403') {
      this.showErrorMessage = 'Usuário ou senha inválida! Por favor tente novamente';
    }
    if (typeErro.status == '0') {
      this.showErrorMessage = 'Sistema OFFLine! Por favor tente novamente mais tarde';
    }
    if (typeErro == 'Session Expired') {
      this.showErrorMessage = 'Sistema OFFLine! Por favor tente novamente mais tarde';
    }
    if (!typeErro.id && typeErro.password) {
      this.showErrorMessage = 'Usuário não existente';
    }
  }

  openDialogUser(): void {
    this.clearInput();
    this.dialog.open(DialogUsuarioComponent, {
      width: '300px',
      data: {id: null, name: '', username: '', password: ''}
    });
  }

  clearInput() {
    this.form = {username: '', password: ''};
    this.spiner = false;
    this.showErrorMessage = '';
  }

}
