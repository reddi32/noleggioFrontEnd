import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutoComponent } from './lista-auto.component';

describe('ListaAutoComponent', () => {
  let component: ListaAutoComponent;
  let fixture: ComponentFixture<ListaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
