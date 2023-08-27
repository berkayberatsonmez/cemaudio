import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreySectionComponent } from './grey-section.component';

describe('GreySectionComponent', () => {
  let component: GreySectionComponent;
  let fixture: ComponentFixture<GreySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreySectionComponent]
    });
    fixture = TestBed.createComponent(GreySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
