import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping/shopping.service";
import {forEach} from "@angular/router/src/utils/collection";
import {isObjectFlagSet} from "tslint";

@Injectable()
export class RecipeService {

  recipeChanged = new EventEmitter<Recipe[]>();

  private _recipes: Recipe[] = [
    new Recipe(
      0,
      'Zinger',
      '100% breast fillet chicken coated in Zinger flavouring combined with lettuce and mayo for those seeking a full on hot and spicy flavour hit.',
      'https://www.kfc.com.au/media/339334/burger_zinger.jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Chicken Piece', 1),
        new Ingredient('Latuce', 1),
      ]),
    new Recipe(
      1,
      'Sandwich',
      'The fourth Earl of Sandwich, contrary to popular belief, was not the first person to put some tasty morsels between bread and declare it a meal.',
      'https://www.homeawaygroceries.com/wp-content/uploads/2016/03/sandvich.png',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Veggie Petty', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomato', 1)
      ]),
    new Recipe(
      2,
      'Shushi',
      'The Japanese preparation and serving of specially prepared vinegared rice combined with varied ingredients',
      'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Vinegar', 1),
        new Ingredient('Cucumber', 1),
        new Ingredient('Tomato', 1)
      ]),
  ];

  constructor(private _shoppingService: ShoppingService) {
  }

  getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this._recipes.find(recipe => recipe.getId() === id);
  }

  remove(id: number){
    let changedRecipes = this._recipes.filter((recipe) => {
      return recipe.getId() !== id;
    });
    this.recipeChanged.emit(changedRecipes);
  }

  ingredientsToShopping(ingredients: Ingredient[]) {
    this._shoppingService.getIngredients().push(...ingredients);
    this._shoppingService.ingredientsChanged.emit(this._shoppingService.getIngredients());
  }

}
