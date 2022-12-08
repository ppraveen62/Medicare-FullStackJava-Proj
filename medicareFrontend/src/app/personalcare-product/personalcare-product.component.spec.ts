import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcareProductComponent } from './personalcare-product.component';

describe('PersonalcareProductComponent', () => {
  let component: PersonalcareProductComponent;
  let fixture: ComponentFixture<PersonalcareProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcareProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalcareProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
