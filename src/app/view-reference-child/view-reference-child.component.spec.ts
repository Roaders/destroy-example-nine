import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReferenceChildComponent } from './view-reference-child.component';

describe('ViewReferenceChildComponent', () => {
  let component: ViewReferenceChildComponent;
  let fixture: ComponentFixture<ViewReferenceChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReferenceChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReferenceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
