import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] | undefined;
  /*recipes: Recipe[] = [
  new Recipe(
      'Hamburger',
      'The Best Classic Burger!',
      'https://www.mindmegette.hu/images/316/O/hamburger.jpg'),
    new Recipe(
      'Pizza',
      'Best homemade Pizza',
      'https://cdn.portfolio.hu/articles/images-lg/f/r/o/frozen-pizza-sales-go-through-the-roof-in-hungary-168921.jpg'),
    new Recipe(
      'Fried Chicken',
      'Crispy Fried Chicken',
      'https://mediterran.cafeblog.hu/files/2017/03/Nachos-r%C3%A1ntott-csirkesz%C3%A1rnyak-%C3%A9des-cs%C3%ADp%C5%91s-chili-sz%C3%B3sszal.jpg')
  ];
   */

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  /*onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }*/
}
