import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database'
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersRef: AngularFireList<IUser>;
  users: Observable<IUser[]>;
  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('users');
    this.users = this.usersRef.valueChanges();
  }

  banUser(user: IUser) {
    this.db.list('users').update(user.uid, { banned: true })
  }

  unbanUser(user: IUser) {
    this.db.list('users').update(user.uid, { banned: false })
  }

  getUser(uid: string): any {
    return this.db.object('users/' + uid).valueChanges();
  }

  updateBoughtProductsList(uid: string, productId: string) {
    this.db.list('users' + uid + '/boughtProducts').push(productId);
  }

}
