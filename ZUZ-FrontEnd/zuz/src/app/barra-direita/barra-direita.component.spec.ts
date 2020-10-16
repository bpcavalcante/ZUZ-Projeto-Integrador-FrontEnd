import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDireitaComponent } from './barra-direita.component';

describe('BarraDireitaComponent', () => {
  let component: BarraDireitaComponent;
  let fixture: ComponentFixture<BarraDireitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDireitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
