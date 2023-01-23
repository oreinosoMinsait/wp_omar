import { FormGroup } from '@angular/forms';

export function comparePassword(controlName: string, matchingControlName: string) {

  // Return null or object with a boolean var = true
  return (formGroup: FormGroup) => {

    // Control vars of both
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    
    // Check if the error is caused by this function and return null if it's not
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }
    
    // Check if values are different -> return: error if they are didfferent || null if not
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}