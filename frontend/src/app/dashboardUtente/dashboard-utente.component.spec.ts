import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtenteComponent } from './dashboard-utente.component';

describe('DashboardUtenteComponent', () => {
  let component: DashboardUtenteComponent;
  let fixture: ComponentFixture<DashboardUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
