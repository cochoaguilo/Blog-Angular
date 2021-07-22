import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlbumesComponent } from './modal-albumes.component';

describe('ModalAlbumesComponent', () => {
  let component: ModalAlbumesComponent;
  let fixture: ComponentFixture<ModalAlbumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlbumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
