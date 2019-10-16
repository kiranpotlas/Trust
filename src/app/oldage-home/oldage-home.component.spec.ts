import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldageHomeComponent } from './oldage-home.component';

describe('OldageHomeComponent', () => {
  let component: OldageHomeComponent;
  let fixture: ComponentFixture<OldageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
