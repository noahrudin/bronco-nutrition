import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { RestaurantDetailsPage } from './restaurantdetails.page'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: RestaurantDetailsPage,
            },
        ]),
    ],
    declarations: [RestaurantDetailsPage],
})
export class RestaurantDetailsPageModule {}
