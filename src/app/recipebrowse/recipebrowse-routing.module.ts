import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListPage } from '../recipelist/recipelist.page';
import { RecipeBrowsePage } from './recipebrowse.page';
const routes: Routes = [
  {
    path: 'recipebrowse',
    component: RecipeBrowsePage,
    children: [
      {
        path: 'recipelist',
        children: [
          {
            path: '',
            loadChildren: '../recipelist/recipelist.module#RecipeListPageModule'
          }
        ]
      },
      {
        path: 'bookmarkedlist',
        children: [
          {
            path: '',
            loadChildren: '../bookmarkedlist/bookmarkedlist.module#BookmarkedListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '../recipelist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../recipelist',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipeBrowseRoutingModule {}
