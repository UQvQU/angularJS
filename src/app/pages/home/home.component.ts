import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isCollapsed = false;
  openMap: { [name: string]: boolean } = {
    user: true,
    team: false
  };
  menu = 'Tom'

  openChange(val: string): void {
    for (const key in this.openMap) {
      if (key != val) {
        this.openMap[key] = false
      }
    }
    console.log(this.openMap)
  }
}
