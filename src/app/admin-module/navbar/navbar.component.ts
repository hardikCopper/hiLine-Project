import { Component } from '@angular/core';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuState = false;
  constructor(private scs: SwitchComponentsService) {
    scs.getNavbarRightMenu().subscribe(state => {
      this.menuState = state;
    })
  }
  changeMenu() {
    this.scs.btnPress = true;
    this.scs.changeNavbarRightMenu();
  }
  changeSideBarLife() {
    this.scs.chanageShowSideBar();
  }
}
