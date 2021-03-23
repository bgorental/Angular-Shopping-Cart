import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoping_list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nmInput : ElementRef; 
 @ViewChild('amountInput') amtInput : ElementRef;
//  @Output() outIngreds = new EventEmitter<Ingredient>();

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }


  addItem(){
     const ingName = this.nmInput.nativeElement.value;
     const ingAmount = this.amtInput.nativeElement.value;
     const newIngredient = new Ingredient (ingName, ingAmount);
    //  this.outIngreds.emit(newIngredient);
    this.slService.addIngredient(newIngredient);

  }
}
