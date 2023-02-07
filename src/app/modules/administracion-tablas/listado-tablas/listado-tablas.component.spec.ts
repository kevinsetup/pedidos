import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTablasComponent } from './listado-tablas.component';

describe('ListadoTablasComponent', () => {
  let component: ListadoTablasComponent;
  let fixture: ComponentFixture<ListadoTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTablasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
