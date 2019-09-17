import { Component, Input } from '@angular/core'
import { NavController } from '@ionic/angular'
import * as firebase from 'firebase'
import { InputChangeEventDetail } from '@ionic/core'
import { RecipeDetailsPage } from '../recipedetails/recipedetails.page'
import { Macro, Recipe } from '../Recipe'
import { FoodItem } from '../FoodItem'

@Component({
    selector: 'app-list',
    templateUrl: 'browse.page.html',
    styleUrls: ['browse.page.scss'],
})
export class BrowsePage {
    private foodDB: firebase.database.Reference = firebase
        .database()
        .ref('foodSheet/')
    private loadedFoodList: Array<any>
    private componentFoodItem: any
    public foodList: Array<any>

    constructor(private navCtrl: NavController) {
        this.foodDB.on('value', foodList => {
            const foods = []
            foodList.forEach(food => {
                foods.push(food.val())
                return false
            })
            this.foodList = foods
        })
        this.foodList.shift() // get rid of descriptions
        this.loadedFoodList = this.foodList
    }

    // Austin, can you have this act like the selecting
    // list component in foodList.page.ts?
    foodListClick() {
        this.navCtrl.navigateForward('foodlist')
    }

    initializeFoodList() {
        this.foodList = this.loadedFoodList
    }

    getFoodItems(searchbar: any) {
        const search = searchbar.srcElement.value
        this.initializeFoodList()

        if (!search) {
            return
        }

        this.foodList = this.foodList.filter(val => {
            if (val && search) {
                if (
                    val[0].indexOf(search) > -1 ||
                    val[0].toLowerCase().indexOf(search) > -1
                ) {
                    this.componentFoodItem = search
                    return true
                }
                return false
            }
        })
    }
}
