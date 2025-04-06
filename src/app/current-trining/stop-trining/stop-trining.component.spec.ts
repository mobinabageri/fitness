import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTriningComponent } from './stop-trining.component';

describe('StopTriningComponent', () => {
  let component: StopTriningComponent;
  let fixture: ComponentFixture<StopTriningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopTriningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopTriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
