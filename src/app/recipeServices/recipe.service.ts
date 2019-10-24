import { Injectable } from '@angular/core'
import * as firebase from 'firebase'
import { Recipe } from '../Recipe'
import { FoodItem } from '../FoodItem'

const FOOD_ITEM_NAME_INDEX = 0
const FOOD_MACRO_INDEX = 1

const RECIPE_NAME_INDEX = 0
const NUM_SERVINGS_INDEX = 1
const MACROS_INDEX = 2
const PREP_TIME_INDEX = 3
const INGREDIENTS_INDEX = 4
const STEPS_INDEX = 5
const IMAGE_INDEX = 6

export const snapshotToRecipeArray = snapshot => {
    const returnArr = []
    let idx = 0
    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val()
        // package everything up into an easily usable Recipe object.
        const title = item[RECIPE_NAME_INDEX]
        const numServings = Recipe.parseNumServings(item[NUM_SERVINGS_INDEX])
        const macros = Recipe.parseMacros(item[MACROS_INDEX])
        const prepTime = item[PREP_TIME_INDEX]
        const ingredients = Recipe.parseIngredients(item[INGREDIENTS_INDEX])
        const steps = Recipe.parseSteps(item[STEPS_INDEX])
        const recipeImage = item[IMAGE_INDEX]

        const newRecipe = new Recipe(
            title,
            numServings,
            macros,
            prepTime,
            ingredients,
            steps,
            idx,
            recipeImage
        )
        returnArr.push(newRecipe)
        idx++
    })

    return returnArr
}

export const snapshotToFoodArray = snapshot => {
    const returnArr = []
    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val()
        const title = item[FOOD_ITEM_NAME_INDEX]
        const macros = Recipe.parseMacros(item[FOOD_MACRO_INDEX])

        const newFoodItem = new FoodItem(macros, title)

        returnArr.push(newFoodItem)
    })

    return returnArr
}

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private recipes = []
    private foodItems = []
    private recipeDB = firebase.database().ref('recipeSheet/')
    private foodDB = firebase.database().ref('foodSheet/')
    constructor() {
        // grab recipe data from Firebase, and pack it into an array.
        this.recipeDB.on('value', resp => {
            this.recipes = snapshotToRecipeArray(resp)
        })

        // do the same with food items.
        this.foodDB.on('value', resp => {
            this.foodItems = snapshotToFoodArray(resp)
        })
    }
    get getRecipes(): Array<Recipe> {
        return this.recipes
    }

    get foodList(): Array<FoodItem> {
        return this.foodItems
    }
}
