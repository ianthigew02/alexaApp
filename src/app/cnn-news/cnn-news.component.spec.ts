import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNNnewsComponent } from './cnn-news.component';

describe('CNNnewsComponent', () => {
  let component: CNNnewsComponent;
  let fixture: ComponentFixture<CNNnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNNnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNNnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
