import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from 'src/Common/Types';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  token = ''
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }
  login(sendObj: loginData) {
    const headers = { 'rest-api-key': '4d717e90-7323-423c-b198-47eabe4975a5' };
    const body: loginData = { company_code: sendObj.company_code, email: sendObj.email, password: sendObj.password };
    return this.http.post<any>('https://sis.hi-line.com/dev/api/api/user/login', body, { headers });
  }
  setToken(token: string, rememberMe: boolean) {
    this.router.navigate(['/admin']);
    this.token = token;
    if (rememberMe) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      this.cookieService.set('loginToken', token, expirationDate);
    } else this.cookieService.set('loginToken', token, 0);
  }
}
