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

    signinForm:FormGroup = new FormGroup ({
    email:new FormControl(null, [Validators.required, Validators.email]    ), 
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{7,}$/)])
  })


  constructor(private accountService: AccountService
    ,private router: Router
  ) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log('✅ Logged in successfully', response);
        this.router.navigateByUrl('/shop'); // 👈 يروح على صفحة الشوب بعد اللوجن
      },
      error: err => console.log('❌ Error:', err)
    });
  }
}
