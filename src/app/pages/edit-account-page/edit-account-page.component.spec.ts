import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountPageComponent } from './edit-account-page.component';

describe('EditAccountPageComponent', () => {
  let component: EditAccountPageComponent;
  let fixture: ComponentFixture<EditAccountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
