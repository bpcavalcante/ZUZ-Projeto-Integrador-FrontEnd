import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLeftComponent } from './barra-left.component';

describe('BarraLeftComponent', () => {
  let component: BarraLeftComponent;
  let fixture: ComponentFixture<BarraLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
