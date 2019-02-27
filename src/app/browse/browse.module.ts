import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BrowsePage } from './browse.page';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrowsePage
      }
    ])
  ],
  declarations: [BrowsePage, BrowseComponent]
})
export class BrowsePageModule {}
