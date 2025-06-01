import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantListPageComponent } from './etudiant-list-page.component';

describe('EtudiantListPageComponent', () => {
  let component: EtudiantListPageComponent;
  let fixture: ComponentFixture<EtudiantListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
