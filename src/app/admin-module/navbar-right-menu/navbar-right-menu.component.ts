import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
import { ModalService } from 'src/app/Common/Services/modal.service';
@Component({
  selector: 'app-navbar-right-menu',
  templateUrl: './navbar-right-menu.component.html',
  styleUrls: ['./navbar-right-menu.component.scss']
})
export class NavbarRightMenuComponent {
  constructor(private elementRef: ElementRef, private scs: SwitchComponentsService, private modalService: ModalService) {
  }

  @HostListener('document:click', ['$event'])
  clickOutsideComponent(event: Event) {
    if (!this.modalService.btnPress) {
      if (!this.elementRef.nativeElement.contains(event.target as Node)) {
        this.scs.changeNavbarRightMenu();
      }
    }
    else this.modalService.btnPress = false
  }
}
