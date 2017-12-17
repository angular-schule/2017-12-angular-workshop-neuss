import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private settings = {
      authServer: 'https://angular-schule.eu.auth0.com',
      clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
      redirectUri: 'http://localhost:4200',
      audience: 'https://api.angular.schule'
  };

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
      'response_type=token&' +
      `redirect_uri=${this.settings.redirectUri}&` +
      `client_id=${this.settings.clientId}&` +
      `audience=${this.settings.audience}`;

    location.href = url;
  }

  handleAuthentication() {
    this.route.fragment.pipe(
      filter(e => !!e),
      map(fragment => new URLSearchParams(fragment).get('access_token'))
    ).subscribe(token => {
      console.log('Token:', token);
      sessionStorage.setItem('access_token', token);
      window.location.hash = '';
    });
  }

  logout() {
    sessionStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }

  getToken(): string {
    return sessionStorage.getItem('access_token');
  }

  get isAuthenticated() {
    return !!this.getToken();
  }
}
