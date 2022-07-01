import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tom',
  templateUrl: './tom.component.html',
  styleUrls: ['./tom.component.less', '../../../shared/shared.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
