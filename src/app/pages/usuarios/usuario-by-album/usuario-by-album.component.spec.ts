import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioByAlbumComponent } from './usuario-by-album.component';

describe('UsuarioByAlbumComponent', () => {
  let component: UsuarioByAlbumComponent;
  let fixture: ComponentFixture<UsuarioByAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioByAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioByAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
