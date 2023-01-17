import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraImagenComponent } from './muestra-imagen.component';

describe('MuestraImagenComponent', () => {
  let component: MuestraImagenComponent;
  let fixture: ComponentFixture<MuestraImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
