import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getusers() {
    return [
      new User('rosol mulla', 123456, 'rosol@gmail.com'),
      new User('jaber rammal', 159753, 'jaber@gmail.com'),
    ];
  }

  constructor() {}
}
class User {
  name: string;
  password: Number;
  email: string;
  constructor(name: string, password: Number, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}
