import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { LoggingService } from 'src/app/logging.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../../app/store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }> ;
  // private onChangeSub: Subscription;

  constructor(
    private loggingService:
        LoggingService,
    private store:
      Store<fromApp.AppState>) { }
  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.onChangeSub = this.shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients
    //     }
    //   );
    this.loggingService.printLog('Hello from Shopping List ngOnInit!');
  }
  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index)
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    // this.onChangeSub.unsubscribe();
  }
}
