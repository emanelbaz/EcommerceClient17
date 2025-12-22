import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm!: FormGroup;

  isLoading: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.initializeUserForm();
  }
  initializeUserForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      this.toaster.error('Fix Login form Errors!', 'Error');
      return;
    }
    this.isLoading = true;
    this.accountService.userLogin(this.loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(' Logged in successfully', response);
        this.toaster.success('Welcome Back', 'Success');
        this.router.navigateByUrl('/shop');
      },
      error: (err) => {
        this.isLoading = false;
        this.toaster.error(
          'Login failed. Please check your login info and try again.',
          'Error'
        );
        console.log('Login failed:', err);
      },
    });
  }
}
