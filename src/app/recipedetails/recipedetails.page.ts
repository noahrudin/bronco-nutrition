import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Recipe } from '../Recipe'
import { Macro } from '../Recipe'
import { NavController } from '@ionic/angular'
import { ToastController } from '@ionic/angular'
import * as firebase from 'firebase'
import { FirebaseDatabase } from '@angular/fire'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: 'recipedetails.page.html',
    styleUrls: ['recipedetails.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
    private recipeToDisplay: Recipe
    public isBookmarked: boolean
    public recipeTitle: string
    public servingSize: string
    public prepTime: string
    public macros: Macro[]
    public macroString: string
    public ingredients: Array<{ name: string }> = []
    public steps: Array<{ str: string }> = []
    private inc = 0
    private recipeBook: Array<Recipe> = []
    public recipeCheckMarked = false
    private testinc: Array<number> = []

    constructor(
        private navCtrl: NavController,
        private toastController: ToastController,
        private afAuth: AuthService
    ) {
        this.recipeToDisplay = Recipe.getRecipeToDisplay
        this.recipeTitle = this.recipeToDisplay.getRecipeTitle
        this.servingSize = this.recipeToDisplay.getNumServings
        this.prepTime = this.recipeToDisplay.getPrepTime
        this.macros = this.recipeToDisplay.getMacros

        // populate lists of ingredients and steps
        this.setupIngredientsList()
        this.setupStepsList()
        this.macroString = this.getMacroString()
        const bookMarked = this.isRecipeBookmarked()
        this.recipeCheckMarked = bookMarked
    }

    bookmarkClick() {
        this.presentToast()
        this.bookmarkRecipe()
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Recipe Bookmarked',
            duration: 1500,
        })
        toast.present()
    }

    bookmarkRecipe() {
        /*if(localStorage.getItem("increment")!= null){
    this.inc=JSON.parse(localStorage.getItem("increment"));
    this.recipeToBook[this.inc] = this.recipeToDisplay.getRecipeTitle;
    localStorage.setItem(this.afAuth.user.email, JSON.stringify(this.recipeToBook));
    this.inc++;
    localStorage.setItem("increment",JSON.stringify(this.inc));
    //skeleton to be filled in by Austin/Tony
    }else{
        this.recipeToBook[this.inc]=this.recipeToDisplay.getRecipeTitle;
        localStorage.setItem(this.afAuth.user.email,JSON.stringify(this.recipeToBook));
        this.inc++;
        localStorage.setItem("increment",JSON.stringify(this.inc));
    }
    console.log(this.inc); */
        // firebase.database().ref('favorites/'+this.afAuth.user.uid).push(this.recipeToDisplay);
        this.recipeBook = JSON.parse(
            localStorage.getItem(this.afAuth.user.email)
        )
        console.log(this.recipeBook)
        if (this.recipeBook !== null) {
            this.recipeBook.push(this.recipeToDisplay)
            localStorage.setItem(
                this.afAuth.user.email,
                JSON.stringify(this.recipeBook)
            )
        } else {
            localStorage.setItem(
                this.afAuth.user.email,
                JSON.stringify(Array(this.recipeToDisplay))
            )
        }
        // localStorage.removeItem(this.afAuth.user.email);
        const bookMarked = this.isRecipeBookmarked()
        this.recipeCheckMarked = bookMarked
    }

    isRecipeBookmarked(): boolean {
        // check and see if the recipe is saved to local storage.
        this.recipeBook = <Array<Recipe>>(
            JSON.parse(localStorage.getItem(this.afAuth.user.email))
        )
        if (this.recipeBook !== null) {
            for (let i = 0; i < this.recipeBook.length; i++) {
                if (
                    this.recipeToDisplay.getRecipeTitle ===
                    this.recipeBook[i].title
                ) {
                    this.recipeCheckMarked = true
                }
            }
            /*this.recipeBook.forEach(recipe => {
      console.log(recipe);
      if(this.recipeToDisplay.getRecipeTitle === recipe.title){
        this.recipeCheckMarked = true;
      }
    });
    */
        }
        return this.recipeCheckMarked
    }

    setupIngredientsList() {
        for (let i = 0; i < this.recipeToDisplay.getIngredients.length; i++) {
            this.ingredients.push({
                name: this.recipeToDisplay.getIngredients[i],
            })
        }
    }

    setupStepsList() {
        for (let i = 0; i < this.recipeToDisplay.getSteps.length; i++) {
            this.steps.push({
                str: this.recipeToDisplay.getSteps[i],
            })
        }
    }

    stringifyMacro(macro: Macro): string {
        if (macro === Macro.Carbohydrates) {
            return 'Carbohydrates'
        } else if (macro === Macro.Fat) {
            return 'Fats'
        } else {
            return 'Protein'
        }
    }

    getMacroString(): string {
        let macroString = ''
        for (let i = 0; i < this.macros.length; i++) {
            macroString += this.stringifyMacro(this.macros[i])
            if (i < this.macros.length - 1) {
                macroString += ', '
            }
        }
        return macroString
    }

    ngOnInit() {}

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
