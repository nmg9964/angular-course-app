import { Component } from '@angular/core';
import { Ingredient } from '../ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Bananas', 3)
  ]

  constructor() { }

  pushIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
