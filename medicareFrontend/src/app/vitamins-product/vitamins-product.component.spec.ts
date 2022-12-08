import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminsProductComponent } from './vitamins-product.component';

describe('VitaminsProductComponent', () => {
  let component: VitaminsProductComponent;
  let fixture: ComponentFixture<VitaminsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitaminsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
