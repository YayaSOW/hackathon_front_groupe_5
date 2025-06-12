import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceItemJustificatifComponent } from './absence-item-justificatif.component';

describe('AbsenceItemJustificatifComponent', () => {
  let component: AbsenceItemJustificatifComponent;
  let fixture: ComponentFixture<AbsenceItemJustificatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceItemJustificatifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceItemJustificatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
