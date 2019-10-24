import { Component } from '@angular/core'
import { PopoverController } from '@ionic/angular'
import { PopoverComponent } from '../../component/popover/popover.component'

@Component({
    selector: 'app-home',
    templateUrl: 'tip.modal.html',
})
export class PopoverExample {
    constructor(public popoverController: PopoverController) {}

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: ev,
            translucent: true,
        })
        return await popover.present()
    }
}
