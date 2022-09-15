import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypiComponent } from './typi.component';

describe('TypiComponent', () => {
  let component: TypiComponent;
  let fixture: ComponentFixture<TypiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
