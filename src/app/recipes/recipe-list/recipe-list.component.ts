import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipes: RecipeService) { }

  ngOnInit() {
    this.recipes = this._recipes.getRecipes();
  }

}
