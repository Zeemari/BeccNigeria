import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { IndustrialConstructionComponent } from './services/industrial-construction/industrial-construction.component';
import { RoadConstructionComponent } from './services/road-construction/road-construction.component';
import { SitePlanningComponent } from './services/site-planning/site-planning.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'services/industrial-construction',
        component: IndustrialConstructionComponent,
      },
      {
        path: 'services/road-construction',
        component: RoadConstructionComponent,
      },
      {
        path: 'services/site-planning',
        component: SitePlanningComponent,
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
