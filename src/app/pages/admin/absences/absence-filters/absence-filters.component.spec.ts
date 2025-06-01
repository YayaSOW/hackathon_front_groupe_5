import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceFiltersComponent } from './absence-filters.component';

describe('AbsenceFiltersComponent', () => {
  let component: AbsenceFiltersComponent;
  let fixture: ComponentFixture<AbsenceFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
