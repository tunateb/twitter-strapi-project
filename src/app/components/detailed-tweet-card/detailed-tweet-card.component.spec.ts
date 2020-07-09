import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTweetCardComponent } from './detailed-tweet-card.component';

describe('DetailedTweetCardComponent', () => {
  let component: DetailedTweetCardComponent;
  let fixture: ComponentFixture<DetailedTweetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedTweetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTweetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
