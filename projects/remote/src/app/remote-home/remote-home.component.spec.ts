import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteHomeComponent } from './remote-home.component';

describe('RemoteHomeComponent', () => {
  let component: RemoteHomeComponent;
  let fixture: ComponentFixture<RemoteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
