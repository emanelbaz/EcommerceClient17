import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly accountService = inject(AccountService);
  private readonly router = inject(Router);

  registerForm: FormGroup = new FormGroup(
    {
      displayName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      rePassword: new FormControl(null, [Validators.required])
      // phone: new FormControl(null, [
      //   Validators.required,
      //   Validators.pattern(/^01[0125][0-9]{8}$/),
      // ]),
      // address: new FormControl(null, []),
    },
    this.confirmPassword
  );

  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;
    const rePassword = group.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }

  submitForm() {
    if (this.registerForm.invalid) {
      alert('Fix Register form Errors!');
      return;
    }
    const { rePassword, ...registerFormValue } = this.registerForm.value;
    this.accountService.register(registerFormValue).subscribe({
      next: (response) => {
        console.log(' Account created successfully', response);
        alert('Account created successfully, you are ready to login!');
        this.registerForm.reset();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err:HttpErrorResponse) => {
        alert('Register failed.'+ err.error);
        console.log('Register failed:', err.error);
      },
    });
  }
}
