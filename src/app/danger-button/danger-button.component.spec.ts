import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerButtonComponent } from './danger-button.component';

describe('DangerButtonComponent', () => {
  let component: DangerButtonComponent;
  let fixture: ComponentFixture<DangerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DangerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
