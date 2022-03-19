import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  baseurl: string = 'http://localhost:3000/';
  headers = { 'content-type': 'application/json' };
  user: any = [];
  constructor(private usersService: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.user = this.usersService.getusers();
  }
  flag: number = 0;
  onsubmit(loginform: any) {
    for (let i of this.user) {
      if (
        i.name == loginform.value.name &&
        i.password == loginform.value.password
      ) {
        alert('welcome to our website ' + loginform.value.name);
        this.router.navigateByUrl('home');
        this.flag = 1;
      }
    }
    if (this.flag == 0) {
      alert('you have to enter a valid details');
    }
  }
}
