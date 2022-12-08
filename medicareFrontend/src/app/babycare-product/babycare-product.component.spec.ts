import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycareProductComponent } from './babycare-product.component';

describe('BabycareProductComponent', () => {
  let component: BabycareProductComponent;
  let fixture: ComponentFixture<BabycareProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabycareProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabycareProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
