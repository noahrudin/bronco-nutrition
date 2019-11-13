import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Restaurant } from '../Restaurant'
import { NavController } from '@ionic/angular'
import { RestaurantDetailsPage } from '../restaurantdetails/restaurantdetails.page'
import { RestaurantService } from '../restaurantServices/restaurant.service'

@Component({
    selector: 'app-list',
    templateUrl: 'restaurantlist.page.html',
    styleUrls: ['restaurantlist.page.scss'],
})
export class RestaurantListPage implements OnInit {
    public static selectedRestaurant: Restaurant
    private loadedList: Array<any>
    public restaurants: Array<Restaurant>
    public items: Array<{
        title: string
        id: number
        selected: boolean
        bookmark: boolean
    }> = []
    
    private inc: any = 0
    private bookmarked = false
    constructor(
        private restaurantService: RestaurantService,
        private navCtrl: NavController,
        private firebaseAuth: AuthService
    ) {
        // grab the restaurants we got from firebase, and
        // put use their titles for the UI list.

        this.restaurants = this.restaurantService.getRestaurant
        for (let i = 1; i < this.restaurants.length; i++) {
            this.items.push({
                title: this.restaurants[i].getRestaurantTitle,
                id: this.restaurants[i].dbIndex,
                selected: false,
                bookmark: false,
            })
        }

        this.loadedList = this.items
    }

    ngOnInit() {}

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }

    listItemClick(index: number) {
        Restaurant.restaurantToDisplay = this.restaurants[index]
        this.navCtrl.navigateForward('restaurantdetails')
    }

    initializeRestaurantList() {
        this.items = this.loadedList
    }

    getRestaurants(searchbar: any) {
        const search = searchbar.srcElement.value
        this.initializeRestaurantList()

        if (!search) {
            return
        }

        this.items = this.items.filter(val => {
            if (val && search) {
                if (
                    val.title.indexOf(search) > -1 ||
                    val.title.toLowerCase().indexOf(search) > -1
                ) {
                    return true
                }
                return false
            }
        })
    }

    public static set getRestaurant(restaurant: {
        title: string
        id: number
        selected: boolean
        bookmark: boolean
    }) {
        this.prototype.listItemClick(restaurant.id)
    }
}
