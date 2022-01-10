import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice(); // copy of ingredients array, I can't access to the original array, which stored in the service
  }
  constructor() { }
}
