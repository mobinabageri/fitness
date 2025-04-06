import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTriningComponent } from './past-trining.component';

describe('PastTriningComponent', () => {
  let component: PastTriningComponent;
  let fixture: ComponentFixture<PastTriningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastTriningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastTriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
