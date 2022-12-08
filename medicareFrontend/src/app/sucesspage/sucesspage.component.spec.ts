import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesspageComponent } from './sucesspage.component';

describe('SucesspageComponent', () => {
  let component: SucesspageComponent;
  let fixture: ComponentFixture<SucesspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucesspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
