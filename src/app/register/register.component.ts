import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, public usersService: UsersService) { }

  register(email: string, password: string) {
    this.usersService.addUser(email);
    this.authService.signUp(email, password);

  }

  ngOnInit(): void {
  }

}
