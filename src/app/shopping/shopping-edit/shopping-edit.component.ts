import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name_input') name_input;
  @ViewChild('amount_input') amount_input;
  constructor(private _shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  onAdd() {
    const newIngredient = new Ingredient(
      this.name_input.nativeElement.value,
      this.amount_input.nativeElement.value
    );
    this._shoppingService.addIngredient(newIngredient);
  }

  onClear() {
    this.name_input.nativeElement.value = '';
    this.amount_input.nativeElement.value = '';
  }

}
