import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { Token } from './apipeople';

@Injectable({
  providedIn: 'root'
})
export class ApiPeopleService {

  private token: string;
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
    // this.token = this.getToken();
   }

   login(email: string, pw: string, grantType: string, clientId: string) { // retourner le endpoint d'identification
      const body = new HttpParams()
        .set('username', email)
        .set('password', pw)
        .set('grant_type', grantType)
        .set('client_id', clientId);
      const header = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

      return this.http.post(`http://localhost:8082/oauth/token`,
        body.toString(),
        {
          headers: header
        }).pipe(
            map(response => {
              if (response) {
                return true;
              } else {
                return false;
              }
            }),
            catchError((error: any) => {
              return of(false);
            }));
    }

    getToken() {
      this.token =  localStorage.getItem('token');
      return this.token;
    }

    setToken(token) {
      localStorage.setItem('token', token);
    }

}
