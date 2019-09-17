import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
    },
    {
        path: 'browse',
        loadChildren: './browse/browse.module#BrowsePageModule',
    },
    {
        path: 'bookmarkedlist',
        loadChildren:
            './bookmarkedlist/bookmarkedlist.module#BookmarkedListPageModule',
    },
    {
        path: 'foodlist',
        loadChildren: './foodlist/foodlist.module#FoodListPageModule',
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutPageModule',
    },
    {
        path: 'help',
        loadChildren: './help/help.module#HelpPageModule',
    },
    {
        path: 'recipedetails',
        loadChildren:
            './recipedetails/recipedetails.module#RecipeDetailsPageModule',
    },
    {
        path: 'recipelist',
        loadChildren: './recipelist/recipelist.module#RecipeListPageModule',
    },
    {
        path: 'resources',
        loadChildren: './resources/resources.module#ResourcesPageModule',
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsPageModule',
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule',
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterPageModule',
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountPageModule',
    },

    // {
    //   path: 'recipebrowse',
    //   loadChildren: './recipebrowse/recipebrowse.module#RecipeBrowsePageModule'
    //   //loadChildren: './tabs/tabs.module#TabsPageModule'
    // }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
