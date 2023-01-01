import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, RouterModule],
})
export class IndexModule {}
