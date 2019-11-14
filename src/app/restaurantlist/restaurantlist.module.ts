import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { RestaurantListPage } from './restaurantlist.page'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: RestaurantListPage,
            },
        ]),
    ],
    declarations: [RestaurantListPage],
    providers: [InAppBrowser],
})
export class RestaurantListPageModule {}
