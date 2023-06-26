import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeRoute = [{ activeState: false, path: '', blackUrl: '/assets/Icons/Black_Sidebar/Inventory.svg', whiteUrl: '/assets/Icons/White_Sidebar/Inventory.svg' },
  { activeState: false, path: 'users', blackUrl: '/assets/Icons/Black_Sidebar/Team.svg', whiteUrl: '/assets/Icons/White_Sidebar/Team.svg' },
  { activeState: false, path: 'price_and_parts', blackUrl: '/assets/Icons/Black_Sidebar/Price.svg', whiteUrl: '/assets/Icons/White_Sidebar/Price.svg' },
  { activeState: false, path: 'area', blackUrl: '/assets/Icons/Black_Sidebar/Area.svg', whiteUrl: '/assets/Icons/White_Sidebar/Area.svg' },
  { activeState: false, blackUrl: '/assets/Icons/Black_Sidebar/Parts.svg', whiteUrl: '/assets/Icons/White_Sidebar/Parts.svg' }]
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute.forEach((route) => {
          let routePath = '';
          if (route.path != '') routePath = `/${route.path}`;
          if (event.url === `/admin${routePath}`) route.activeState = true;
          else route.activeState = false
        })
        console.log('Path changed:', event.url);
        // Do whatever you need to do here
      }
    });
  }
  changeActiveRoute(path: string | undefined) {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
