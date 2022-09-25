import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  arr: any[] = [];

  addA() {
    this.arr.push([]);
  }

  removeA(i) {
    this.arr.splice(i, 1);
  }

  addB(i) {
    this.arr[i].push([]);
  }

  removeB(i, j) {
    this.arr[i].splice(j, 1);
  }

  addC(i, j) {
    this.arr[i][j].push([]);
  }

  removeC(i, j, k) {
    this.arr[i][j].splice(k, 1);
  }

  addD(i, j, k) {
    this.arr[i][j][k].push([]);
  }
  removeD(i, j, k, l) {
    this.arr[i][j][k].splice(l, 1);
  }

  getData(form) {
    console.log(form.value, this.arr);
  }
}

export class Plan {
  title;
  plan: Plan[] = [];
}
