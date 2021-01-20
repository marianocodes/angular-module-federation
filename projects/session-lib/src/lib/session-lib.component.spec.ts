import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLibComponent } from './session-lib.component';

describe('SessionLibComponent', () => {
  let component: SessionLibComponent;
  let fixture: ComponentFixture<SessionLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
