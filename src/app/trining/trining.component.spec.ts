import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriningComponent } from './trining.component';

describe('TriningComponent', () => {
  let component: TriningComponent;
  let fixture: ComponentFixture<TriningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TriningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
