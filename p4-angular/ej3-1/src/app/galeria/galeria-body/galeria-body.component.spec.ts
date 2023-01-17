import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaBodyComponent } from './galeria-body.component';

describe('GaleriaBodyComponent', () => {
  let component: GaleriaBodyComponent;
  let fixture: ComponentFixture<GaleriaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
