import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTriningComponent } from './current-trining.component';

describe('CurrentTriningComponent', () => {
  let component: CurrentTriningComponent;
  let fixture: ComponentFixture<CurrentTriningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentTriningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTriningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
