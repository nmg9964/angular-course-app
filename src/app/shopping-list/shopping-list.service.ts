import { Ingredient } from '../ingredient.model'

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Bananas', 3)
  ]

  getIngredients = () => {
    return this.ingredients
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
