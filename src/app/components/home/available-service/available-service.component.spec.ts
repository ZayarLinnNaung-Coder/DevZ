import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableServiceComponent } from './available-service.component';

describe('AvailableServiceComponent', () => {
  let component: AvailableServiceComponent;
  let fixture: ComponentFixture<AvailableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
