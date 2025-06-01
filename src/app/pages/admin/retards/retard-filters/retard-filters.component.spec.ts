import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardFiltersComponent } from './retard-filters.component';

describe('RetardFiltersComponent', () => {
  let component: RetardFiltersComponent;
  let fixture: ComponentFixture<RetardFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetardFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
