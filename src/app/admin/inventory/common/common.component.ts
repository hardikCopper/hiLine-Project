import { Component } from '@angular/core';
import { inventoryTabsType } from 'src/app/Types';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent {
  activeTabs: inventoryTabsType = {
    log: true,
    add: false,
    return: false
  }
}
