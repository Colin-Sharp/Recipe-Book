import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/components/shared/shared.module';
import { CoreModule } from './core.module';
import { shopppingListReducer } from 'src/components/shopping/store/shopping-list.reducer';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shopppingListReducer}),
    SharedModule,
    CoreModule
   
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule { }
