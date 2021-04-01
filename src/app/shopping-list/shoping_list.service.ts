// import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model"
 

export class ShoppingListService{
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 20),
        new Ingredient('Apple', 10)
    ]

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
} 