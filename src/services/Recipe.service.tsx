import { Observable, of } from "rxjs";
import { Category, IngredientClasses, Recipe } from "../models/Recipe.model";
import { ingredientClassesMock, searchResults } from "../models/Search.mock";
import { selectAllRecipes, selectAllRecipesLength, selectCurrentUserId, selectLikedRecipesIds, selectMyRecipes, selectRecipesByIds } from "./Store";

export const myRecipes = [
    searchResults[4],
    searchResults[9],
    searchResults[10]
];

export function GetPopular(): Observable<Recipe[]> {
    const allRecipes = selectAllRecipes();
    const popular = allRecipes.sort((a, b) => a.likes > b.likes ? -1 : 1);
    return of(popular.slice(0, 3))
}

export function SearchRecipes(name: string, filters: Category[]): Recipe[] {
    const allRecipes = selectAllRecipes();
    let results: Recipe[] = [];
    results = !!name && name !== '' ? [...allRecipes].filter(r => r.name.toLowerCase().includes(name.toLocaleLowerCase())) : [...allRecipes];

    if (!!filters && filters.length) {
        results = results.filter(r => r.category && filters.includes(r.category));
    }

    return results;
}

export function GetIngredientClasses(): IngredientClasses {
    return {
        main: ingredientClassesMock.main?.sort((a, b) => a.name.localeCompare(b.name)),
        vegetables: ingredientClassesMock.vegetables?.sort((a, b) => a.name.localeCompare(b.name)),
        fruit: ingredientClassesMock.fruit?.sort((a, b) => a.name.localeCompare(b.name)),
    };
}

export function SearchByIngredients(ingredients: number[], filters: Category[]): Recipe[] {
    const allRecipes = selectAllRecipes();
    let results: Recipe[] = [];

    // todo: refactor this !!
    results = [...allRecipes].filter(r => {
        const classes = [...(r.ingredientClasses?.main?.map(c => c.id) || []), ...(r.ingredientClasses?.vegetables?.map(c => c.id) || []), ...(r.ingredientClasses?.fruit?.map(c => c.id) || [])];
        return !!ingredients.filter(value => classes.includes(value)).length;
    });

    if (!!filters && filters.length) {
        results = results.filter(r => r.category && filters.includes(r.category));
    }

    return results;
}


export function GetMyRecipes(): Recipe[] {
    return selectMyRecipes();
}

export function AddMyRecipe(recipe: Recipe): Recipe {
    const length = selectAllRecipesLength();
    const userId = selectCurrentUserId();
    recipe = { ...recipe, id: length + 1, userId };
    return recipe;
}

export function GetLikedRecipes() {
    const userId = selectCurrentUserId();
    const recipeIds = selectLikedRecipesIds(userId);
    if (!recipeIds.length) return [];

    return selectRecipesByIds(recipeIds);
}
