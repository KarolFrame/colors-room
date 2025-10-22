import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotification } from './header-notification';

describe('HeaderNotification', () => {
  let component: HeaderNotification;
  let fixture: ComponentFixture<HeaderNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
