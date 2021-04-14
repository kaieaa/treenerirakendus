import { Component, Input } from '@angular/core';
import { LoginStore } from '../../stores/LoginStore';
import API from '../../util/ApiUtil';

@Component({
  selector: 'app-content',
  providers: [LoginStore],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})


export class RandomComponent {

  public values: any;

  public fetchOnClick = async () => {
    try {
      const response = await API.get('/users');
      this.values = response.data;
    } catch (e) {
      console.error(e);
    }
  }

}
