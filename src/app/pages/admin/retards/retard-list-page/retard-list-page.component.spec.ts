import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardListPageComponent } from './retard-list-page.component';

describe('RetardListPageComponent', () => {
  let component: RetardListPageComponent;
  let fixture: ComponentFixture<RetardListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetardListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
