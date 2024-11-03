import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegerPacienteComponent } from './maneger-paciente.component';

describe('ManegerPacienteComponent', () => {
  let component: ManegerPacienteComponent;
  let fixture: ComponentFixture<ManegerPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManegerPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManegerPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
