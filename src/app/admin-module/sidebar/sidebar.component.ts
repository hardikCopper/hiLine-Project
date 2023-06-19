import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeRoute = [{ activeState: true, blackUrl: '/assets/Icons/Black_Sidebar/Inventory.svg', whiteUrl: '/assets/Icons/White_Sidebar/Inventory.svg' },
  { activeState: false, blackUrl: '/assets/Icons/Black_Sidebar/Team.svg', whiteUrl: '/assets/Icons/White_Sidebar/Team.svg' },
  { activeState: false, blackUrl: '/assets/Icons/Black_Sidebar/Price.svg', whiteUrl: '/assets/Icons/White_Sidebar/Price.svg' },
  { activeState: false, blackUrl: '/assets/Icons/Black_Sidebar/Area.svg', whiteUrl: '/assets/Icons/White_Sidebar/Area.svg' },
  { activeState: false, blackUrl: '/assets/Icons/Black_Sidebar/Parts.svg', whiteUrl: '/assets/Icons/White_Sidebar/Parts.svg' }]
  changeActiveRoute(activeIndex:number){
this.activeRoute.forEach((route,index)=>{
  if(index === activeIndex) route.activeState = true;
  else route.activeState = false;
})
  }
}
