import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPosteosComponent } from './modal-posteos.component';

describe('ModalPosteosComponent', () => {
  let component: ModalPosteosComponent;
  let fixture: ComponentFixture<ModalPosteosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPosteosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPosteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
