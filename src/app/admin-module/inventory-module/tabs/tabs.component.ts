import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() activeTab = [{ activeState: true, text: 'INVENTORY LOG' },
  { activeState: false, text: 'ADD INVENTORY' },
  { activeState: false, text: 'RETURN INVENTORY' }]
  changeTab(activeIndex: number) {
    this.activeTab.forEach((tab, index) => {
      if (index === activeIndex) tab.activeState = true;
      else tab.activeState = false;
    })
  }
}

