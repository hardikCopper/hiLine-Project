import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchComponentsService {
  btnPress = false
  private navbar_right_menu = new BehaviorSubject<boolean>(false);
  private navbar_right_menuChanged = this.navbar_right_menu.asObservable();
  constructor() { }
  getNavbarRightMenu(): Observable<boolean> {
    return this.navbar_right_menuChanged
  }
  changeNavbarRightMenu() {
    let value = !this.navbar_right_menu.getValue()
    this.navbar_right_menu.next(value)
  }
}
