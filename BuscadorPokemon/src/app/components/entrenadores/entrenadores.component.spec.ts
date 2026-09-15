import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadoresComponent } from './entrenadores.component';

describe('EntrenadoresComponent', () => {
  let component: EntrenadoresComponent;
  let fixture: ComponentFixture<EntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
