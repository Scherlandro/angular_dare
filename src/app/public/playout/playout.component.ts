import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-playout',
  templateUrl: './playout.component.html',
  styleUrls:['./playout.component.css','playout.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class PlayoutComponent implements OnInit {
  irpara: boolean = true;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this._http.post('https://formspree.io/asdlf7asdf',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }



}
