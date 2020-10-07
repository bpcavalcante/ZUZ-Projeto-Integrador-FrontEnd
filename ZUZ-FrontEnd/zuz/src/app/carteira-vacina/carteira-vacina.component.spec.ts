import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraVacinaComponent } from './carteira-vacina.component';

describe('CarteiraVacinaComponent', () => {
  let component: CarteiraVacinaComponent;
  let fixture: ComponentFixture<CarteiraVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
