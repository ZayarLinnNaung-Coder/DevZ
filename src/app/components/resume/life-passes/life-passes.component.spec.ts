import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePassesComponent } from './life-passes.component';

describe('LifePassesComponent', () => {
  let component: LifePassesComponent;
  let fixture: ComponentFixture<LifePassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
