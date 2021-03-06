import { Component } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipeService } from './recipe.service'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent {
  featuredRecipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.featuredRecipe = recipe
    })
  }

}
