import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardTableComponent } from './retard-table.component';

describe('RetardTableComponent', () => {
  let component: RetardTableComponent;
  let fixture: ComponentFixture<RetardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetardTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
