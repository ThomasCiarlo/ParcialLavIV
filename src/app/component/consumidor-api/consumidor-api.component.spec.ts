import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorApiComponent } from './consumidor-api.component';

describe('ConsumidorApiComponent', () => {
  let component: ConsumidorApiComponent;
  let fixture: ComponentFixture<ConsumidorApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumidorApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
