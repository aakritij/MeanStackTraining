import { Injectable } from "@angular/core";
import { Recipe } from "../recipe";


@Injectable()
export class RecipeService {

    private recipes: Recipe[]=[
        new Recipe('Jalebi', 'round round', 'https://recipes.timesofindia.com/photo/53099699.cms'),
        new Recipe('Rabdi', 'on top of jalebi', 'http://betterbutterbucket.s3-website-ap-southeast-1.amazonaws.com/386x386/public/recipe_thumb/medium/1440074310aB3lyYOV5z.jpg')
    ];

    constructor(){}

    getRecipes(){
        return this.recipes;
    }
}