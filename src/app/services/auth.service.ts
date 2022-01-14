import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => console.log('registered', res)).catch(err => console.log('Error ', err));
  }


  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => console.log('logged!: ', res)).catch(err => console.log('Error: ', err));
  }

  signOut() {
    this.angularFireAuth.signOut();
  }

}
