import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContact } from './content-contact';

describe('ContentContact', () => {
  let component: ContentContact;
  let fixture: ComponentFixture<ContentContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
