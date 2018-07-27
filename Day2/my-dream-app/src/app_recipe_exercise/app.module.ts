import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeService } from './recipes/recipe-list/recipe.service';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '../../node_modules/@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpService } from './db.service';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [RecipeService, HttpService],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
