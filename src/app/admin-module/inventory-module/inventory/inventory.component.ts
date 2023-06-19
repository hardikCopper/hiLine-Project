import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  activeTab = [{ activeState: true, text: 'INVENTORY LOG' },
  { activeState: false, text: 'ADD INVENTORY' },
  { activeState: false, text: 'RETURN INVENTORY' }]
}
