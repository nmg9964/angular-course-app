import { Component } from '@angular/core';
import { Ingredient } from '../ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  ingredients: Ingredient[]

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients()
  }

  pushIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
