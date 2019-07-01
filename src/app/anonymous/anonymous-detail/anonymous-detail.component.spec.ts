import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousDetailComponent } from './anonymous-detail.component';

describe('Anonymous.DetailComponent', () => {
  let component: AnonymousDetailComponent;
  let fixture: ComponentFixture<AnonymousDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
