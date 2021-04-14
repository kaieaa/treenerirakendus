import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterStore } from '../../stores/RegisterStore';
import { RootStore } from '../../stores/RootStore';

@Component({
  selector: 'app-content',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  private registerStore: RegisterStore;

  constructor(rootStore: RootStore, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.registerStore = rootStore.registerStore;
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {

  }

  get f(): {[key: string]: AbstractControl} {
    return this.registerForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.registerStore.register(this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.password.value)
      .then((success) => {
        if (success) {
          this.router.navigateByUrl('/login');
        } else {
          this.loading = false;
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
  }

}
