import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProductComponent } from './health-product.component';

describe('HealthProductComponent', () => {
  let component: HealthProductComponent;
  let fixture: ComponentFixture<HealthProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
