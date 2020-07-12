import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNewDocumentComponent } from './custom-new-document.component';

describe('CustomNewDocumentComponent', () => {
  let component: CustomNewDocumentComponent;
  let fixture: ComponentFixture<CustomNewDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNewDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
