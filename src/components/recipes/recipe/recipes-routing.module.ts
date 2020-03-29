import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { RecipeComponent } from '../../recipes/recipe/recipe.component';
import { RecipeDetailComponent } from '../../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../../recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from '../../recipes/recipes-resolver.service';
import {AuthGard} from '../../../app/auth/auth.gard';

  const routes: Routes = [
  {
    path: "", component: RecipeComponent, canActivate: [AuthGard], children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]
  }
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}