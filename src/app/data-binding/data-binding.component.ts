import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'hello';
  isActive: boolean = true;
  userName: string = 'long123';
  email: string = '';

  constructor() {}

  ngOnInit(): void {}

  handleChangeMessage(messageRef: HTMLInputElement) {
    this.message = messageRef.value;
    console.log(messageRef);
  }

  handlerChangeUsername(event: any) {
    console.log(event.target);
    this.userName = event.target.value;
  }
}
