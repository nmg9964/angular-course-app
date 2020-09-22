import { Recipe } from './recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test', 'This is a test.', 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591'),
    new Recipe('Another Test', 'This is another test.', 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591')
  ]

  getRecipes = () => {
    return this.recipes.slice()
  }
}
