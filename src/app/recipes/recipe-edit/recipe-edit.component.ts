import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  id: number;
  editMode: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = +params['id'] != null;
      if (this.editMode) {
        this.recipe = this._recipeService.getRecipe(this.id);
      }
    });
  }

}
