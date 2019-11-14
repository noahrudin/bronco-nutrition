import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Restaurant } from '../Restaurant'
import { NavController } from '@ionic/angular'
import { ToastController } from '@ionic/angular'

@Component({
    selector: 'app-home',
    templateUrl: 'restaurantdetails.page.html',
    styleUrls: ['restaurantdetails.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
    private restaurantToDisplay: Restaurant
    public restaurantTitle: string
    public location: string
    public choices: Array<{
        menuItemName: string
        menuItemCalorieCount: string
    }> = []
    public restaurantImage: HTMLImageElement

    constructor(
        private navCtrl: NavController,
        private toastController: ToastController,
        private afAuth: AuthService
    ) {
        this.restaurantToDisplay = Restaurant.getRestaurantToDisplay
        this.restaurantTitle = this.restaurantToDisplay.getRestaurantTitle
        this.location = this.restaurantToDisplay.getLocation
        this.restaurantImage = this.restaurantToDisplay.getImage

        // populate lists of ingredients and steps
        this.setupChoicesList()
    }

    setupChoicesList() {
        for (let i = 0; i < this.restaurantToDisplay.getChoices.length; i++) {
            this.choices.push({
                menuItemName: this.restaurantToDisplay.getChoices[i],
                menuItemCalorieCount: this.restaurantToDisplay.getCalories[i],
            })
        }
    }

    ngOnInit() {}

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
