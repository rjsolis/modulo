import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarComponent } from './modal-agregar.component';

describe('ModalAgregarComponent', () => {
  let component: ModalAgregarComponent;
  let fixture: ComponentFixture<ModalAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
