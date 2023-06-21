import { Component } from '@angular/core';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
import { ModalService } from 'src/app/Common/Services/modal.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuState = false;
  constructor(private scs: SwitchComponentsService, private modalService: ModalService) {
    scs.getNavbarRightMenu().subscribe(state => {
      this.menuState = state;
    })
  }
  changeMenu() {
    this.modalService.btnPress = true;
    this.scs.changeNavbarRightMenu();
  }
}
