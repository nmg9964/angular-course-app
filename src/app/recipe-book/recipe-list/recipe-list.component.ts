import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[]
  @Output() selectedRecipe = new EventEmitter<Recipe>()

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  recipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe)
  }

}
