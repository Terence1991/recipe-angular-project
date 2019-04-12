import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipieDetailComponent } from './recipes/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipes/recipie-list/recipie-item/recipie-item.component'

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, RecipesComponent, RecipeListComponent, RecipieDetailComponent, RecipieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
