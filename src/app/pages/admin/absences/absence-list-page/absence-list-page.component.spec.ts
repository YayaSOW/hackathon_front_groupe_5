import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceListPageComponent } from './absence-list-page.component';

describe('AbsenceListPageComponent', () => {
  let component: AbsenceListPageComponent;
  let fixture: ComponentFixture<AbsenceListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
