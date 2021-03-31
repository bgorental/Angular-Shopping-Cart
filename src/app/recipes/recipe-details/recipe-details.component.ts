import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
//  @Input()
  recipe : Recipe;
  id : number;
  constructor(private route:ActivatedRoute, private recipeService: RecipeService, private router : Router) {  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => 
    {this.id = +params['id']; 
     this.recipe = this.recipeService.getRecipes(this.id);})
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
