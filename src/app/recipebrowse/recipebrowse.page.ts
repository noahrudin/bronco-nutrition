import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../Recipe';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'recipebrowse.page.html',
  styleUrls: ['recipebrowse.page.scss']
})
export class RecipeBrowsePage{}
