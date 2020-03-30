import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Observable } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }> ;
  // private onChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService, private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }
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
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy() {
    // this.onChangeSub.unsubscribe();
  }
}