import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvmComponent } from './pvm.component';

describe('PvmComponent', () => {
  let component: PvmComponent;
  let fixture: ComponentFixture<PvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
