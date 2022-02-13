import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientChange: Subscription | undefined;
  /*ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 10)
  ];*/
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChange = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(): void {
    this.ingredientChange?.unsubscribe();
  }
}
