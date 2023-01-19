import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpedidoComponent } from './modificarpedido.component';

describe('ModificarpedidoComponent', () => {
  let component: ModificarpedidoComponent;
  let fixture: ComponentFixture<ModificarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
