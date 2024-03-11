import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommonPagesComponent } from './uncommon-pages.component';

describe('UncommonPagesComponent', () => {
  let component: UncommonPagesComponent;
  let fixture: ComponentFixture<UncommonPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UncommonPagesComponent]
    });
    fixture = TestBed.createComponent(UncommonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
