import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
    // grab the recipes we got from firebase, and
    // put use their titles for the UI list.
    this.recipes = this.firebaseAuth.getRecipes;
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: this.recipes[i].getRecipeTitle
      });
    }
  }

  ngOnInit() {

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  listItemTapped(index: number) {
    console.log('tapped item #' + index);
  }
}
