import {Ingredient} from "../shared/ingredient.model";
export class Recipe {

  constructor(
              private _id: number,
              private _name: string,
              private _desc: string,
              private _imageUrl: string,
              private _ingredients: Ingredient[]) {
    this.setName(_name);
    this.setDesc(_desc);
    this.setImageUrl(_imageUrl);
    this.setIngredients(_ingredients)
  }

  public getId(): number {
    return this._id;
  }
  public setId(id: number) {
    this._id = id;
  }
  public getName(): string {
    return this._name;
  }
  public setName(name: string) {
    this._name = name;
  }
  public getDesc(): string {
    return this._desc;
  }
  public setDesc(desc: string) {
    this._desc = desc;
  }
  public getImageUrl(): string {
    return this._imageUrl;
  }
  public setImageUrl(imageUrl: string) {
    this._imageUrl = imageUrl;
  }
  public getIngredients(): Ingredient[]{
    return this._ingredients;
  }
  public setIngredients(ingredients: Ingredient[]){
    this._ingredients = ingredients;
  }
}
