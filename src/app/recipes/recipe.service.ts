import { EventEmitter } from '@angular/core'
import{ Recipe } from './recipe.model';



export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Recipe1 name', 'Recipe1 Desc', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Recipe2 name', 'Recipe2 Desc', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

      getRecipe(){
        return  this.recipes.slice();
      }
}  