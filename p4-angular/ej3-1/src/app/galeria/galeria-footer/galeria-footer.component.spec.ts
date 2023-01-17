import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaFooterComponent } from './galeria-footer.component';

describe('GaleriaFooterComponent', () => {
  let component: GaleriaFooterComponent;
  let fixture: ComponentFixture<GaleriaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
