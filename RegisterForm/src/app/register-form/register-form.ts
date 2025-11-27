import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get passwordStrength(): number {
    const password = this.password?.value || '';
    let strength = 0;
    
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;
    
    return strength;
  }

  get passwordStrengthLabel(): string {
    const strength = this.passwordStrength;
    if (strength <= 25) return 'Weak';
    if (strength <= 50) return 'Fair';
    if (strength <= 75) return 'Good';
    return 'Strong';
  }

  get passwordStrengthClass(): string {
    const strength = this.passwordStrength;
    if (strength <= 25) return 'weak';
    if (strength <= 50) return 'fair';
    if (strength <= 75) return 'good';
    return 'strong';
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Form submitted successfully:', formData);

      // Save to localStorage
      localStorage.setItem('registrationData', JSON.stringify({
        username: formData.username,
        email: formData.email,
        timestamp: new Date().toISOString()
      }));

      this.successMessage = 'Registration successful! Welcome, ' + formData.username + '!';
      
      setTimeout(() => {
        this.successMessage = '';
        this.resetForm();
      }, 3000);
    }
  }

  resetForm(): void {
    this.registerForm.reset();
    this.submitted = false;
    this.successMessage = '';
  }
}