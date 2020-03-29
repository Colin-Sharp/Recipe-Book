import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private onChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) {}
  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients();
   this.onChangeSub = this.shoppingListService.ingredientsChanged
   .subscribe (
     (ingredients: Ingredient[]) => {
       this.ingredients = ingredients
     }
   )
   this.loggingService.printLog('Hello from Shopping List ngOnInit!');
  }
  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy() {
    this.onChangeSub.unsubscribe();
  }
}