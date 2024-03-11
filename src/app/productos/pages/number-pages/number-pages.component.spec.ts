import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPagesComponent } from './number-pages.component';

describe('NumberPagesComponent', () => {
  let component: NumberPagesComponent;
  let fixture: ComponentFixture<NumberPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPagesComponent]
    });
    fixture = TestBed.createComponent(NumberPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
