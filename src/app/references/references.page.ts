import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: 'references.page.html',
    styleUrls: ['references.page.scss'],
})
export class ReferencesPage {
    constructor(private iab: InAppBrowser) {}

    openBrowser(link: string) {
        this.iab.create(link, '_system', 'location=yes')
    }
}
