import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { TipPage } from './tip.page'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: TipPage,
            },
        ]),
    ],
    declarations: [TipPage],
})
export class TipPageModule {}
