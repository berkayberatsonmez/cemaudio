import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicContainerComponent } from './music-container.component';

describe('MusicContainerComponent', () => {
  let component: MusicContainerComponent;
  let fixture: ComponentFixture<MusicContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicContainerComponent]
    });
    fixture = TestBed.createComponent(MusicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
