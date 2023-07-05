import { Component, Input, Output, EventEmitter } from '@angular/core';
import { activeTabType } from 'src/app/Common/Types';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() activeTab: activeTabType[] = [];
  @Output() tabChanging = new EventEmitter<number>();
  changeTab(activeIndex: number) {
    this.tabChanging.emit(activeIndex);
  }
}

