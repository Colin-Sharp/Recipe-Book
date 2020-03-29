import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class RecipeService {
  recipesChange = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "Tasty Schnitzel",
  //     "A super tasty Schnitzel - just awesome!",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc6Ca8vF3aaC5HENH8Ctimx3ro_hBwze5rKlc_bpHtPf4jhil6",
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Frise', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     "Big Fat Burger",
  //     "What else can I say?",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4kC8CQQ4Rz0nWcD9nQw8-wqoTILpMTP8AAKRH7IU7bhCUN4ol",
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes
    this.recipesChange.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
     this.recipes.splice(index, 1);
     this.recipesChange.next(this.recipes.slice())
  }
}
