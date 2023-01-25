import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChildrenComponent } from './dialog-children.component';

describe('DialogChildrenComponent', () => {
  let component: DialogChildrenComponent;
  let fixture: ComponentFixture<DialogChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
