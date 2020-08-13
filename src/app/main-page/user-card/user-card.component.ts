import { Component, OnInit, Input } from '@angular/core';
import { GitUser } from "./../../_model/user";
import { FavHelperService } from "../../_service/fav-helper.service";
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  _user: GitUser;

  isFav: boolean;
  @Input()
  set user(user: GitUser) {
    this._user = user

    this.getFav()
  }


  constructor(
    public fvh: FavHelperService
  ) {

  }

  ngOnInit(): void {
  }

  switchFav() {
    if (this.isFav) {
      this.fvh.deleteFromFavorites(this._user.id)
    } else {
      this.fvh.addFavorite(this._user)
    }
    this.getFav()
  }

  getFav() {
    this.isFav = this.fvh.findFavorite(this._user.id) >= 0

  }

}
