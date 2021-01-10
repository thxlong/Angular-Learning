import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true;

  color: string = 'red';

  img: string =
    'https://azpet.com.vn/wp-content/uploads/2019/09/ly-do-husky-1.jpg';

  result: string = `<p class='text-white bg-primary'>Demo</p>`;
  constructor() {}

  ngOnInit(): void {}
}
