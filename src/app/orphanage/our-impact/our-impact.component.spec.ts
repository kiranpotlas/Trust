import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurImpactComponent } from './our-impact.component';

describe('OurImpactComponent', () => {
  let component: OurImpactComponent;
  let fixture: ComponentFixture<OurImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
