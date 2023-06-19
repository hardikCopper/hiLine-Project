import { Component } from '@angular/core';
import { activeTabType } from 'src/app/Common/Types';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  activeTab: activeTabType[] = [{ activeState: true, text: 'INVENTORY LOG' },
  { activeState: false, text: 'ADD INVENTORY' },
  { activeState: false, text: 'RETURN INVENTORY' }]
}
