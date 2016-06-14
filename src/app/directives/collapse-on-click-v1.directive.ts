import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[collapse-on-click-v1]'
})
export class CollapseOnClickV1 {

  isCollapsed = false;

  @HostBinding('class.collapsed')
  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

}
