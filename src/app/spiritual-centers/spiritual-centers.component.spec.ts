import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritualCentersComponent } from './spiritual-centers.component';

describe('SpiritualCentersComponent', () => {
  let component: SpiritualCentersComponent;
  let fixture: ComponentFixture<SpiritualCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritualCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritualCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
