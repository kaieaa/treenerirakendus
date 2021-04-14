/*import { Component } from '@angular/core';
import { LoginStore } from '../../stores/LoginStore';
import { RootStore } from '../../stores/RootStore';
import API from '../../util/ApiUtil';


@Component({
  selector: 'app-content',
  providers: [LoginStore],
  templateUrl: './students.component.html'
})
export class StudentsComponent {

  public values: any;

  public fetchOnClick = async () => {
    try {
      const response = await API.get('/students');
      this.values = response.data;
    } catch (e) {
      console.error(e);
    }
  }

}*/

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootStore } from '../../stores/RootStore';
import { StudentsStore } from '../../stores/StudentsStore';

@Component({
  selector: 'app-content',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  private studentsStore: StudentsStore;

  constructor(rootStore: RootStore, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.studentsStore = rootStore.studentsStore;
    this.studentsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {

  }

  get f(): {[key: string]: AbstractControl} {
    return this.studentsForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.studentsForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.studentsStore.students(this.f.firstName.value, this.f.lastName.value, this.f.email.value, this.f.phone.value)
      .then((success) => {
        if (success) {
          this.router.navigateByUrl('/students');
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
