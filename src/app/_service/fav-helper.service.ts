import { Injectable } from '@angular/core';
import { GitUser } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class FavHelperService {


  constructor() {
    const ls = localStorage.getItem('favlist');
    if (!ls) {
      localStorage.setItem('favlist', JSON.stringify({ list: [] }))
    }

  }

  getFavorites(): Array<GitUser> {
    const ls = localStorage.getItem('favlist');
    return JSON.parse(ls).list;
  }

  findFavorite(id: number) {
    const arr: Array<GitUser> = this.getFavorites()

    return arr.findIndex((user) => {
      return id === user.id
    })
  }

  addFavorite(user: GitUser) {
    if (this.findFavorite(user.id) >= 0) {
      return;
    }
    const arr: Array<GitUser> = this.getFavorites()
    arr.push(user);
    localStorage.setItem('favlist', JSON.stringify({ list: arr }))

  }

  deleteFromFavorites(id: number): boolean {
    const arr: Array<GitUser> = this.getFavorites()
    const index = this.findFavorite(id);
    if (index < 0) {
      return false;
    }
    arr.splice(index, 1);
    localStorage.setItem('favlist', JSON.stringify({ list: arr }))
    return true;
  }
}
