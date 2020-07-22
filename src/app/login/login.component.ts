import { Component, OnInit } from '@angular/core';
import { ApiPeopleService } from '../api-people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  grantType = 'password';
  clientID = 'my-client-app';
  message: string;

  constructor(private apiPeople: ApiPeopleService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connexion() {
    // console.log(this.email, this.password, this.grantType, this.clientID);
    this.apiPeople
      .login(this.email, this.password, this.grantType, this.clientID)
      .subscribe(isLoggedIn => {
        console.dir(isLoggedIn);
        if (isLoggedIn) {
          return this.router.navigate(['/profil']);
        } else {
          console.log(isLoggedIn);
          this.message = 'E-Mail ou mot de passe invalide';
        }
      });
  }

}
