import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndPartsComponent } from './price-and-parts.component';

describe('PriceAndPartsComponent', () => {
  let component: PriceAndPartsComponent;
  let fixture: ComponentFixture<PriceAndPartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceAndPartsComponent]
    });
    fixture = TestBed.createComponent(PriceAndPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
