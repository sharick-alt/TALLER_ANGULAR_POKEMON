import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquirtleComponent } from './squirtle.component';

describe('SquirtleComponent', () => {
  let component: SquirtleComponent;
  let fixture: ComponentFixture<SquirtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquirtleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquirtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
