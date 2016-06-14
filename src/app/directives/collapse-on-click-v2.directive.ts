import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[collapse-on-click-v2]'
})
export class CollapseOnClickV2 {

  @Input('collapsed')          
  isCollapsed = true;

  @Output('collapsed')
  collapsedOutput = new EventEmitter();

  @HostBinding('class.collapsed')
  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedOutput.emit(this.isCollapsed);
  }

}
