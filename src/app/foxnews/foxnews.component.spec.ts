import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxnewsComponent } from './foxnews.component';

describe('TechnewsComponent', () => {
  let component: FoxnewsComponent;
  let fixture: ComponentFixture<FoxnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
