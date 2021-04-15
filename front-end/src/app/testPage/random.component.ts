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

  public someArray = [1, 2, 3];
  public someValues = ['Malle', 'Kalle', 'Liisa'];
  public newValues: any = [];

  public values: any;

  public fetchOnClick = async () => {
    try {
      const response = await API.get('/users');
      this.values = response.data;
      //console.log(response.data);
      const newValues = this.values;
      //console.log(this.values);
      console.log(newValues);
    } catch (e) {
      console.error(e);
    }
  }


}
