import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: any = {};

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
