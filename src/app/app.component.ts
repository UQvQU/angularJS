import { Component, ChangeDetectionStrategy } from '@angular/core';

// onPush检测机制的执行条件是只有当传入的值有变化，这里需要明白，简单类型是值变化，
// 而复杂类型是引用变化，才会执行组件内部的state更新然后更新视图。
// 当前demo采用一个页面一个模块的方式编写
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isCollapsed = false;
}
