import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailComponent } from './activity-detail.component';

describe('ActivitiyDetailComponent', () => {
  let component: ActivityDetailComponent;
  let fixture: ComponentFixture<ActivitiyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
