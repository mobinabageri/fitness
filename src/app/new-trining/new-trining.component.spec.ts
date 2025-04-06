import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTriningComponent } from './new-trining.component';

describe('NewTriningComponent', () => {
  let component: NewTriningComponent;
  let fixture: ComponentFixture<NewTriningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTriningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
