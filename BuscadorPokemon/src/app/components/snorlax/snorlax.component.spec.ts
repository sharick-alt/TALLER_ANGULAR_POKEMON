import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnorlaxComponent } from './snorlax.component';

describe('SnorlaxComponent', () => {
  let component: SnorlaxComponent;
  let fixture: ComponentFixture<SnorlaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnorlaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnorlaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
