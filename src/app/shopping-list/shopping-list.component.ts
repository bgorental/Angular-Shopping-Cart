import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoping_list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  igSubscript : Subscription;

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igSubscript = this.slService.ingredientsChanged
      .subscribe(
        (ingredients : Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(){
    this.igSubscript.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient){
  //  this.ingredients.push(ingredient);
  // }

}
