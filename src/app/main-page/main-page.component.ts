import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Octokit } from "@octokit/core";
import { GitUser } from '../_model/user';
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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.getter = new Octokit({ auth: `ad362e27db8c1261c4b5b50874e12cf2cae1681e` });
  }

  ngOnInit() {
    const res = this.searchUsers();
  }

  async searchUsers() {
    if (!this.searchtext || this.searchtext === "") {
      this.getFavs();
      return
    }
    const ret = await this.getter.request('GET /search/users', {
      q: this.searchtext,
      per_page: this.pSize,
      page: this.page
    })

    console.log(ret.data);
    this.userList = ret.data.items;
    this.total = ret.data.total_count;

  }

  getFavs() {

  }

  paginate(event) {
    this.pSize = event.pageSize
    this.page = event.pageIndex
    this.searchUsers();
  }
}
