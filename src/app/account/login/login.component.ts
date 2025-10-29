import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: any = {};

  constructor(private accountService: AccountService) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => console.log('Logged in successfully', response),
      error: err => console.log('Error:', err)
    });
  }
}
