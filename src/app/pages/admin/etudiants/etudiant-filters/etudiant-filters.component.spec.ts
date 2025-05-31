import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFiltersComponent } from './etudiant-filters.component';

describe('EtudiantFiltersComponent', () => {
  let component: EtudiantFiltersComponent;
  let fixture: ComponentFixture<EtudiantFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
