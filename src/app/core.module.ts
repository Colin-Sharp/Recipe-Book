import { NgModule } from '@angular/core';
import { AuthIntercoptorService } from './auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeService } from 'src/components/recipes/recipe.service';
import { ShoppingListService } from 'src/components/shopping/shopping-list/shopping-list.service';
// import { LoggingService } from './logging.service';

@NgModule({
  providers: [
    [ShoppingListService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthIntercoptorService, multi: true },
      // LoggingService
    ],
  ]
})
export class CoreModule { }