import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchComponentsService {
  btnPress = false
  private navbar_right_menu = new BehaviorSubject<boolean>(false);
  private navbar_right_menuChanged = this.navbar_right_menu.asObservable();
  private show_sidebar = new BehaviorSubject<boolean>(true);
  private show_sidebar_changed = this.show_sidebar.asObservable();
  constructor() { }
  getNavbarRightMenu(): Observable<boolean> {
    return this.navbar_right_menuChanged
  }
  changeNavbarRightMenu() {
    let state = !this.navbar_right_menu.getValue()
    this.navbar_right_menu.next(state)
  }
  getShowSideBar(): Observable<boolean> {
    return this.show_sidebar_changed
  }
  chanageShowSideBar() {
    let state = !this.show_sidebar.getValue();
    this.show_sidebar.next(state)
  }
}
