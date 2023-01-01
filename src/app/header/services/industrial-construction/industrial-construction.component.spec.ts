import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialConstructionComponent } from './industrial-construction.component';

describe('IndustrialConstructionComponent', () => {
  let component: IndustrialConstructionComponent;
  let fixture: ComponentFixture<IndustrialConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
