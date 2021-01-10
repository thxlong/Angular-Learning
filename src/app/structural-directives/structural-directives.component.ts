import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = false;

  isLogin: boolean = false;

  color: string = 'second';

  dsSinhVien: any[] = [
    {
      hoTen: 'A',
      lop: 1,
    },
    {
      hoTen: 'B',
      lop: 2,
    },
    {
      hoTen: 'C',
      lop: 3,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
