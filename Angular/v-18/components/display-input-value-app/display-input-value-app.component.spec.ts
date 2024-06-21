import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInputValueAppComponent } from './display-input-value-app.component';

describe('DisplayInputValueAppComponent', () => {
  let component: DisplayInputValueAppComponent;
  let fixture: ComponentFixture<DisplayInputValueAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInputValueAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInputValueAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
