import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) { }
  login(email, password) {
    return this.http.post('http://190.239.17.114/marcaideas.php/login', {email: email, password: password});
  }
  register(register) {
    return this.http.post('http://190.239.17.114/marcaideas.php/users', register);
  }
}
