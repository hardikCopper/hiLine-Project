import { Component, Input } from '@angular/core';
import { activeTabType } from 'src/app/Common/Types';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() activeTab: activeTabType[]=[];
  changeTab(activeIndex: number) {
    this.activeTab.forEach((tab: activeTabType, index: number) => {
      if (index === activeIndex) tab.activeState = true;
      else tab.activeState = false;
    })
  }
}

