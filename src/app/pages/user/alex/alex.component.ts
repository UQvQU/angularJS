import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.less', '../../../shared/shared.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
