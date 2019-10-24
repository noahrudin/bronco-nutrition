import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { ReferencesPage } from './references.page'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ReferencesPage,
            },
        ]),
    ],
    declarations: [ReferencesPage],
    providers: [InAppBrowser],
})
export class ReferencesPageModule {}
