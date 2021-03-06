import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("poutine", 'french fries and Gravey', "https://banner2.kisspng.com/20180405/xfq/kisspng-poutine-cuisine-of-quebec-french-fries-canadian-cu-french-fries-5ac5ff5fe5d254.4287826115229254079414.jpg")

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('this is working')
    this.recipeWasSelected.emit(recipe);
    console.log(this.recipeWasSelected)
  }
}
