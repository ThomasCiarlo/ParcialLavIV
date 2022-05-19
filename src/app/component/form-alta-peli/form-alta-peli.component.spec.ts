import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaPeliComponent } from './form-alta-peli.component';

describe('FormAltaPeliComponent', () => {
  let component: FormAltaPeliComponent;
  let fixture: ComponentFixture<FormAltaPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAltaPeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
