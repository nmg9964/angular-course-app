import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() displayRecipes = new EventEmitter()
  @Output() displayShoppingList = new EventEmitter()

  constructor() { }

  onClickRecipes() {
    this.displayRecipes.emit()
  }

  onClickShoppingList() {
    this.displayShoppingList.emit()
  }

}
