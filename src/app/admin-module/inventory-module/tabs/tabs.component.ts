import { Component, Input } from '@angular/core';
import { inventoryTabsType } from 'src/Common/Types';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() activeTabs: inventoryTabsType = {
    log: true,
    add: false,
    return: false
  }
  changeTab(tabName: string) {
    for (let key in this.activeTabs) {
      if (key === tabName) this.activeTabs[key] = true
      else this.activeTabs[key] = false
    }
  }
}

