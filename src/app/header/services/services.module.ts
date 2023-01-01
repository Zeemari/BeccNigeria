import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';

import { IndustrialConstructionComponent } from './industrial-construction/industrial-construction.component';
import { RoadConstructionComponent } from './road-construction/road-construction.component';
import { SitePlanningComponent } from './site-planning/site-planning.component';

@NgModule({
  declarations: [
    ServicesComponent,
    IndustrialConstructionComponent,
    RoadConstructionComponent,
    SitePlanningComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule, RouterModule],
})
export class ServicesModule {}
