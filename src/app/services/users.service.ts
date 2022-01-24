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

  getUsers(): Observable<IUser[]> {
    return this.users;
  }


  addUser(mail: string) {
    const user: IUser = {
      banned: false,
      email: mail,
      roles: { admin: false, customer: true, manager: false },
      uid: 'tmp',
      boughtProducts: [
        'd'
      ],
    }
    const newUser = this.usersRef.push(user);
    const key = newUser.key;
    // key as a value in interface to not use snapshotchanges, but only valuechanges
    this.usersRef.update(key, { uid: key });
  }

  updateBoughtProductsList(uid: string, productId: string) {
    this.db.list('users/' + uid + '/boughtProducts').push(productId);
  }

}
