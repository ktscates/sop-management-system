import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopCardComponent } from './sop-card.component';

describe('SopCardComponent', () => {
  let component: SopCardComponent;
  let fixture: ComponentFixture<SopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
