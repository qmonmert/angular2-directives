import { Component } from '@angular/core';
import { CollapseOnClickV1 } from './directives/collapse-on-click-v1.directive';
import { CollapseOnClickV2 } from './directives/collapse-on-click-v2.directive';
import { CollapseOnClickV3 } from './directives/collapse-on-click-v3.directive';

@Component({
  moduleId: module.id,
  selector: 'angular2-directives-app',
  template: `
    <h1>Directives</h1>
    <div collapse-on-click-v1 class='box'>
      Click to collapse 1
      <div>This is the content 1</div>
    </div>

    <div collapse-on-click-v2 [collapsed]='collapsed' (collapsed)='onToggle($event)' class='box'>
      Click to collapse 2
      <div>This is the content 2</div>
    </div>   

    <div collapse-on-click-v3 #cp='collapsible' [collapsed]='collapsed' (collapsed)='onToggle($event)'
          [class.collapsed]='cp.collapsed' class='box'>
      Click to collapse 3
      <div>This is the content 3</div>
    </div>   
  `,
  styles: ['.collapsed div{display:none;}', 
          '.box{border:1px solid gray;height:100px;margin-bottom:5px;background-color:lightgrey;}'],
  directives: [CollapseOnClickV1, CollapseOnClickV2, CollapseOnClickV3]
})
export class Angular2DirectivesAppComponent {

  collapsed = false;

  onToggle(collapsed) {
    console.info(collapsed);
  }
  
}
