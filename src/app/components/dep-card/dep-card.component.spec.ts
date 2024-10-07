import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCardComponent } from './dep-card.component';

describe('DepCardComponent', () => {
  let component: DepCardComponent;
  let fixture: ComponentFixture<DepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
