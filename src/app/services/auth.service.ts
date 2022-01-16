import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;
  loggedUserData: IUser;
  loggedUserUid: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, public usersService: UsersService) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {

      this.router.navigate([''])
    }).catch(err => console.log('Error ', err));
  }


  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log('logged!: ', res);
      this.loggedUserUid = res.user.uid;
      this.getLoggedUserData(this.loggedUserUid);
      this.router.navigate(['']);
    }).catch(err => console.log('Error: ', err));
  }

  signOut() {
    this.angularFireAuth.signOut();
    this.loggedUserData = undefined;
    this.loggedUserUid
  }

  getLoggedUserUid() {
    return this.loggedUserUid;
  }

  getLoggedUserData(uid: string) {
    this.usersService.getUser(uid).subscribe(data => { this.loggedUserData = data; console.log(this.loggedUserData); console.log('TOTOTO') });
  }

}
