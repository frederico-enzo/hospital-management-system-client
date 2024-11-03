import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegerMedicoComponent } from './maneger-medico.component';

describe('ManegerMedicoComponent', () => {
  let component: ManegerMedicoComponent;
  let fixture: ComponentFixture<ManegerMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManegerMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManegerMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
