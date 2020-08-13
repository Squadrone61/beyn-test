import { Component, OnInit, Input } from '@angular/core';
import { GitUser } from "./../../_model/user";
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  _user: GitUser;

  @Input()
  set user(user: GitUser) {
    this._user = user
  }


  constructor() { }

  ngOnInit(): void {
  }

}
