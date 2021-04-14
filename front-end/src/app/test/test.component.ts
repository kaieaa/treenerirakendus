import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginStore } from '../../stores/LoginStore';
import { RootStore } from '../../stores/RootStore';

@Component({
  selector: 'app-content',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  private loginStore: LoginStore;

  constructor(rootStore: RootStore, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.loginStore = rootStore.loginStore;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {

  }

  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.loginStore.login(this.f.username.value, this.f.password.value)
      .then((success) => {
        if (success) {
          this.router.navigateByUrl('/leht');
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
