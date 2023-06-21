import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRightMenuComponent } from './navbar-right-menu.component';

describe('NavbarRightMenuComponent', () => {
  let component: NavbarRightMenuComponent;
  let fixture: ComponentFixture<NavbarRightMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarRightMenuComponent]
    });
    fixture = TestBed.createComponent(NavbarRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
