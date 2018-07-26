import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {
  }


  formSubmit(nf:NgForm){
    console.log("Form is submitted", nf.value);
  }

  private recipeDetails={
    rname: "soup",
    image: "http://betterbutterbucket.s3-website-ap-southeast-1.amazonaws.com/386x386/public/recipe_thumb/medium/1440074310aB3lyYOV5z.jpg",
    price: "INR 250",
    email: "aakriti.jain@gmail.com"

  };
}
