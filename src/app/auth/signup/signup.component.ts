import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './signup-request.payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupRequestPayload!: SignupRequestPayload;
  signupForm!: FormGroup;

  constructor(private authService: AuthService) {
    this.init();
  }

  ngOnInit(): void {}

  init(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.authService.signup(this.signupForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
