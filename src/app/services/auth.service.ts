import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenuProduct } from '../models/menu-product';
import { IUser } from '../models/user';
import { SelectedProductsService } from './selected-products.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;
  loggedUserData: IUser;
  loggedUserUid: string;
  loggedUserName: string;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, public usersService: UsersService) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.signIn(email, password);
    }).catch(err => console.log('Error ', err));
  }


  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.loggedUserUid = res.user.uid;
      this.loggedUserName = res.user.email.slice(0, (res.user.email.search("@")));
      this.getLoggedUserData(this.loggedUserUid);
      this.router.navigate(['']);
    }).catch(err => console.log('Error: ', err));
  }

  signOut() {
    this.loggedUserData = undefined;
    this.loggedUserUid = undefined;
    this.loggedUserName = undefined;
    this.angularFireAuth.signOut();
  }

  getLoggedUserUid() {
    return this.loggedUserUid;
  }

  getLoggedUserData(uid: string) {
    this.usersService.getUser(uid).subscribe(data => {
      this.loggedUserData = data;
    });
  }

  isManager(): boolean {
    return this.loggedUserData?.roles.manager;
  }

  isCustomer(): boolean {
    return this.loggedUserData?.roles.customer;

  }

  isAdmin(): boolean {
    return this.loggedUserData?.roles.admin;
  }

  canAddComment(p: IMenuProduct): boolean {
    if (!this.loggedUserData.banned && Object.keys(this.loggedUserData.boughtProducts).some(k => this.loggedUserData.boughtProducts[k] == p.productId)) {
      return true;
    }
    return false;
  }



}
