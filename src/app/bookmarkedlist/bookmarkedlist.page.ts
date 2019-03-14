import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'bookmarkedlist.page.html',
  styleUrls: ['bookmarkedlist.page.scss']
})
export class BookmarkedListPage implements OnInit {
  public static selectedRecipe: Recipe;
  private loadedList: Array<any>;
  private recipes: Array<Recipe>;
  public items: Array<{ title: string, idx: number, selected: boolean }> = [];

  constructor(private firebaseAuth: AuthService,
              private navCtrl: NavController) {
  }
    
  ngOnInit() {

  }

}
