import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Octokit } from "@octokit/core";
import { GitUser } from '../_model/user';
import { FavHelperService } from '../_service/fav-helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  searchtext = "";
  pSize = 10;
  page;
  total;
  user = "kajhsgd"
  getter: Octokit;

  userList: Array<GitUser>

  constructor(
    private fvh: FavHelperService,
    private _snackBar: MatSnackBar) {
    this.getter = new Octokit({ auth: `ad362e27db8c1261c4b5b50874e12cf2cae1681e` });
  }

  ngOnInit() {
    this.searchUsers();
  }

  async searchUsers() {
    try {

      if (!this.searchtext || this.searchtext === "") {
        this.getFavs();
        return
      }
      const ret = await this.getter.request('GET /search/users', {
        q: this.searchtext,
        per_page: this.pSize,
        page: this.page
      })
      this.userList = ret.data.items;
      this.total = ret.data.total_count;

    } catch (error) {
      console.log(error)
      this.openSnackBar('Kullanıcıları getirirken hata oldu', null)
    }

  }

  async getFavs() {
    this.userList = this.fvh.getFavorites()
  }

  paginate(event) {
    this.pSize = event.pageSize
    this.page = event.pageIndex
    this.searchUsers();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
