import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormFields } from 'src/models/formFields';
import { comparePassword } from './comparePassword';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  public fg: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.fg = this. fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: ['', [Validators.pattern('[a-zA-Z]+')]],
      nif: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]+[a-zA-Z]')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('.*[0-9].*')]],
      repeatPassword: ['', [Validators.required]],
      description: [''],
      adPolicy: ['', [Validators.requiredTrue]],
    },
    {
      validator: comparePassword('password', 'repeatPassword')
    });
  }

  public onSubmit(): void {

    this.submitted = true;

    if(this.fg.valid) {
      const allData: FormFields = this.fg.value;
      console.log(allData);
      this.fg.reset();
      this.submitted = false;
    }
  }
}