import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XGallerifyComponent } from './x-gallerify.component';

describe('XGallerifyComponent', () => {
  let component: XGallerifyComponent;
  let fixture: ComponentFixture<XGallerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XGallerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XGallerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
