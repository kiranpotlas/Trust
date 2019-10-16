import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestCentersComponent } from './priest-centers.component';

describe('PriestCentersComponent', () => {
  let component: PriestCentersComponent;
  let fixture: ComponentFixture<PriestCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriestCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
