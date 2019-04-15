import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant("Gravey", 7),
    new Ingrediant("Chesse", 9)
  ];

  constructor() { }

  ngOnInit() {
  }

}
