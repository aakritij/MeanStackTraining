import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm } from '../../../../node_modules/@angular/forms';
import { HttpService } from '../../db.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  items:any[] = [];
  @Input() selectedRecipe: Recipe;

  constructor(private ser: HttpService) {

  }

  ngOnInit() {
  }


  formSubmit(nf:NgForm){
    //console.log("Form is submitted", nf.value);
    this.ser.sendData(this.recipeDetails).subscribe((data)=>console.log(data));
  }

  loadData(){
      this.ser.getOwnData().subscribe(
        data=>{
          const myArray =[];
          for(let key in data){
            myArray.push(data[key]);
            console.log(data[key]);
          }
          this.items = myArray;
          console.log(this.items.length);
        }
      )
    }

  private recipeDetails={
    rname: "soup",
    image: "http://betterbutterbucket.s3-website-ap-southeast-1.amazonaws.com/386x386/public/recipe_thumb/medium/1440074310aB3lyYOV5z.jpg",
    price: "INR 250",
    email: "aakriti.jain@gmail.com"

  };
}
