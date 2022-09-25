import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  arr: Content[] = [];

  addA() {
    let newContent = new Content();
    this.arr.push(newContent);
  }

  removeA(i) {
    this.arr.splice(i, 1);
  }

  addB(i) {
    let newContent = new Content();
    this.arr[i].content.push(newContent);
  }

  removeB(i, j) {
    this.arr[i].content.splice(j, 1);
  }

  addC(i, j) {
    let newContent = new Content();
    this.arr[i].content[j].content.push(newContent);
  }

  removeC(i, j, k) {
    this.arr[i].content[j].content.splice(k, 1);
  }

  getData() {
    console.log(this.arr);
  }
}

export class Content {
  title:string='';
  content: Content[] = [];
}
