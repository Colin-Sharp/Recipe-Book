import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeAction from '../../components/recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
  collapse = false;
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
   this.userSub = this.store.select('auth').pipe(map(authState => authState.user ))
     .subscribe(user => {
    this.isAuthenticated = !!user;
   });
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipeAction.StoreRecipes());
  }
  onFeatchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeAction.FetchRecipes());
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onToggle() {
    this.collapse ? this.collapse = false : this.collapse = true;
  }
}
