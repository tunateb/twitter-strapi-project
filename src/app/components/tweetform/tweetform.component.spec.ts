import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetformComponent } from './tweetform.component';

describe('TweetformComponent', () => {
  let component: TweetformComponent;
  let fixture: ComponentFixture<TweetformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
