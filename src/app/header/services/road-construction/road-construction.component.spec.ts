import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadConstructionComponent } from './road-construction.component';

describe('RoadConstructionComponent', () => {
  let component: RoadConstructionComponent;
  let fixture: ComponentFixture<RoadConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadConstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
