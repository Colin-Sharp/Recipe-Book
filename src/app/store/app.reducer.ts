import * as fromShoppingList from '../../components/shopping/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipes from '../../components/recipes/store/recipe.reducer';
import {ActionReducerMap} from '@ngrx/store';

export  interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipes: fromRecipes.State;
}

// @ts-ignore
// @ts-ignore
export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipes: fromRecipes.recipeReducer
};
