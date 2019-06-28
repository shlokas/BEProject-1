import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSharingComponent } from './doc-sharing.component';

describe('DocSharingComponent', () => {
  let component: DocSharingComponent;
  let fixture: ComponentFixture<DocSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
