import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var main:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  socialUser!: SocialUser;
  private accessToken = '';
  loggedIn!: boolean;
  public user: SocialUser = new SocialUser();
  constructor(
    private route: Router,
    private authService: SocialAuthService,
    private socialAuthServiceConfig: SocialAuthService
  ) { }

  ngOnInit(): void {
    new main()
    this.socialAuthServiceConfig.authState.subscribe((user: SocialUser) => {
      this.socialUser = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }
  goto(url:any){
    this.route.navigate([url])
  }
  signInWithFB(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }

}
