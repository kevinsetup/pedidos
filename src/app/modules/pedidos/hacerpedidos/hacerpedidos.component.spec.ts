import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerpedidosComponent } from './hacerpedidos.component';

describe('HacerpedidosComponent', () => {
  let component: HacerpedidosComponent;
  let fixture: ComponentFixture<HacerpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerpedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HacerpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
