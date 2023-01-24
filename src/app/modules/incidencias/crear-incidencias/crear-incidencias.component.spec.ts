import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIncidenciasComponent } from './crear-incidencias.component';

describe('CrearIncidenciasComponent', () => {
  let component: CrearIncidenciasComponent;
  let fixture: ComponentFixture<CrearIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
