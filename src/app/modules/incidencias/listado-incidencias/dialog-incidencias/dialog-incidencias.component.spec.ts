import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIncidenciasComponent } from './dialog-incidencias.component';

describe('DialogIncidenciasComponent', () => {
  let component: DialogIncidenciasComponent;
  let fixture: ComponentFixture<DialogIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
