import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RecipeBrowseRoutingModule } from './recipebrowse-routing.module';

import { RecipeBrowsePage } from './recipebrowse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecipeBrowsePage
      }
    ])
  ],
  declarations: [RecipeBrowsePage]
})
export class RecipeBrowsePageModule {}
