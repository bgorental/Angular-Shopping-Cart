import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nmInput : ElementRef; 
 @ViewChild('amountInput') amtInput : ElementRef;
 @Output() outIngreds = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }


  addItem(){
     const ingName = this.nmInput.nativeElement.value;
     const ingAmount = this.amtInput.nativeElement.value;
     const newIngredient = new Ingredient (ingName, ingAmount);
     this.outIngreds.emit(newIngredient);
  }
}
