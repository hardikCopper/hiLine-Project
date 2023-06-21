import { Component, ElementRef, HostListener } from '@angular/core';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-right-menu',
  templateUrl: './navbar-right-menu.component.html',
  styleUrls: ['./navbar-right-menu.component.scss']
})
export class NavbarRightMenuComponent {
  constructor(private elementRef: ElementRef, private scs: SwitchComponentsService,
    private cookieService: CookieService, private router: Router) {
  }

  @HostListener('document:click', ['$event'])
  clickOutsideComponent(event: Event) {
    if (!this.scs.btnPress) {
      if (!this.elementRef.nativeElement.contains(event.target as Node)) {
        this.scs.changeNavbarRightMenu();
      }
    }
    else this.scs.btnPress = false
  }
  logout() {
    this.cookieService.delete('loginToken');
    this.router.navigate(['/']);
  }
}
