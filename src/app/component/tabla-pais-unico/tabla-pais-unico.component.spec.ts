import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaisUnicoComponent } from './tabla-pais-unico.component';

describe('TablaPaisUnicoComponent', () => {
  let component: TablaPaisUnicoComponent;
  let fixture: ComponentFixture<TablaPaisUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPaisUnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPaisUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
