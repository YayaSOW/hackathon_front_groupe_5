import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantTableComponent } from './etudiant-table.component';

describe('EtudiantTableComponent', () => {
  let component: EtudiantTableComponent;
  let fixture: ComponentFixture<EtudiantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
