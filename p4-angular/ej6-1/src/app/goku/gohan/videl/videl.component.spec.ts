import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidelComponent } from './videl.component';

describe('VidelComponent', () => {
  let component: VidelComponent;
  let fixture: ComponentFixture<VidelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
