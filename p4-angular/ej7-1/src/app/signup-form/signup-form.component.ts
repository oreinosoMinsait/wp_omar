import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormFields } from 'src/models/formFields';

// El usuario deberá introducir de manera obligatoria los siguientes campos: nombre, nif, email, contraseña y aceptar la política de privacidad (checkbox).
// De forma opcional el usuario podrá introducir: descripción (textarea), número de teléfono (number) y apellidos.

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  public fg: FormGroup;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.fg = this. fb.group({
      name: [''],
      nif: [''],
      email: [''],
      password: [''],
      adPolicy: [false],
    });
  }

  public onSubmit(): void {

    this.submitted = true;

    if(this.fg.valid) {
      const allData: FormFields = this.fg.value;
      this.fg.reset();
      this.submitted = false;
    }
  }

}