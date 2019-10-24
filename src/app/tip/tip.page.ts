import { Component } from '@angular/core'
import * as firebase from 'firebase'

@Component({
    selector: 'app-home',
    templateUrl: 'tip.page.html',
    styleUrls: ['tip.page.scss'],
})
export class TipPage {
    private ref = firebase.database().ref('insertSheet/')
    tipText
    constructor() {
        this.ref.on('value', text => {
            this.tipText = text.val()[1][1]
        })
    }
}
