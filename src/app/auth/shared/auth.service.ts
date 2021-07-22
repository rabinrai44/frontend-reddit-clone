import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  /**
   * signup user
   *
   */
  public signup(signupRequestPayload: SignupRequestPayload) {
    return this.httpClient.post(
      this.baseUrl + '/auth/signup',
      signupRequestPayload,
      { responseType: 'text' }
    );
  }
}
