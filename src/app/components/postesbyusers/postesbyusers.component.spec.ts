import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesbyusersComponent } from './postesbyusers.component';

describe('PostesbyusersComponent', () => {
  let component: PostesbyusersComponent;
  let fixture: ComponentFixture<PostesbyusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostesbyusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostesbyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
