import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: any = {};

    loginForm:FormGroup = new FormGroup ({
    email:new FormControl(null, [Validators.required, Validators.email]    ), 
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  })


  constructor(private accountService: AccountService
    ,private router: Router
  ) {}

  submitForm() {
    if(this.loginForm.invalid){
      alert("Fix Login form Errors!");
      return ;
    }
    this.accountService.login(this.loginForm.value).subscribe({
      next: response => {
        console.log(' Logged in successfully', response);
        alert('Welcome back!');
        this.router.navigateByUrl('/shop'); 
      },
      error: err => {
        alert('Login failed. Please check your credentials and try again.');
        console.log('Login failed:', err)
      }
    });
  }

}
