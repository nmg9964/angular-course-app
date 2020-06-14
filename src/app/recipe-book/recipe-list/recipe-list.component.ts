import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test.', 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591'),
    new Recipe('Another Test', 'This is another test.', 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591')
  ]
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  constructor() { }

  recipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe)
  }

}
