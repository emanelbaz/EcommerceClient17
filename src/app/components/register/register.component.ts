import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule ,

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  // injection services to use
  private readonly _FormBuilder = inject(FormBuilder) ;
  private readonly _Router = inject(Router) ;
  private readonly _AuthService = inject(AuthService) ;
  private readonly _DestroyRef = inject(DestroyRef) ;




  // form
  registerForm:FormGroup = this._FormBuilder.group({
    displayName :[null , [Validators.required , Validators.minLength(5) , Validators.maxLength(25)]] ,
    email :[null , [Validators.required , Validators.email]] ,
    password :[null , [Validators.required , Validators.pattern("")]] ,
  })



  // Submit form
  registerFormSubmit() {

    // if form valid
    if (this.registerForm.valid) {


      // use services auth to talk endpoint
      this._AuthService.registerAsUser(this.registerForm.value).pipe(takeUntilDestroyed(this._DestroyRef))   .subscribe({
        next:(res)=>{
          console.log(res);
          

        },

        error:(err:HttpErrorResponse)=>{
          console.log(err);

        }
      })
    } else {

      this.registerForm.markAllAsTouched() ;
    }
  }

}
