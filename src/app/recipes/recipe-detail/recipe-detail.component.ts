import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipe = this._recipeService.getRecipe(this.id);
    });
  }

  toShoppingList(ingredients: Ingredient[]){
    this._recipeService.ingredientsToShopping(ingredients);
  }

  onEditRecipe(){
    this._router.navigate(['recipes/edit', this.id]);
  }

  onDeleteRecipe(){
    this._recipeService.remove(this.id);
  }

}
