import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginunirseComponent } from './loginunirse.component';

describe('UnirseComponent', () => {
  let component: LoginunirseComponent;
  let fixture: ComponentFixture<LoginunirseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginunirseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginunirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
