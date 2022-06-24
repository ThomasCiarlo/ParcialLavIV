import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoContainerComponent } from './nuevo-container.component';

describe('NuevoContainerComponent', () => {
  let component: NuevoContainerComponent;
  let fixture: ComponentFixture<NuevoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
