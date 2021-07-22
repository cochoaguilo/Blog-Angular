import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbyidComponent } from './userbyid.component';

describe('UserbyidComponent', () => {
  let component: UserbyidComponent;
  let fixture: ComponentFixture<UserbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
