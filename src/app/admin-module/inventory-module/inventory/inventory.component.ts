import { Component } from '@angular/core';
import { inventoryTabsType } from 'src/app/Types';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  activeTabs: inventoryTabsType = {
    log: true,
    add: false,
    return: false
  }
}