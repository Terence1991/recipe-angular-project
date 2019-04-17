import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediants.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef;
  ingrediantAdded = new EventEmitter<Ingrediant>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrediant = new Ingrediant(ingName, ingAmount);
  }
}
