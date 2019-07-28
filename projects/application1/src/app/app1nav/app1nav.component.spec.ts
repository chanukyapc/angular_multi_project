import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1navComponent } from './app1nav.component';

describe('App1navComponent', () => {
  let component: App1navComponent;
  let fixture: ComponentFixture<App1navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
