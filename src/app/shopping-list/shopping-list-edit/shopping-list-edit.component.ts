import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  addedIngredient: Ingredient

  constructor(private slService: ShoppingListService) { }

  ngOnInit() { }

  onAddIngredient() {
    const newIngredient =  new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.slService.addIngredient(newIngredient)
  }

}
