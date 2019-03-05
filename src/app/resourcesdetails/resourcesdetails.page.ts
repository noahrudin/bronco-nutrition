import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { Macro } from '../Recipe'
import { NavController } from '@ionic/angular';
import { ResourcesPage } from '../resources/resources.page'

@Component({
  selector: 'app-home',
  templateUrl: 'resourcesdetails.page.html',
  styleUrls: ['resourcesdetails.page.scss'],
})

export class ResourcesDetailsPage{
  private recipeToDisplay: Recipe;
  public recipeTitle: string;
  public servingSize: string;
  public prepTime: string;
  public macros: Macro[];
  public macroString: string;
  public ingredients: Array <{ name: string }> = [];
  public steps: Array<{ str: string }> = [];

  constructor(private navCtrl: NavController) {
  }
   
  ngOnInit() {

  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

}
