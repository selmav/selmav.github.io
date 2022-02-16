import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import SmallDetails from "../components/SmallDetails";
import { Recipe } from "../models/Recipe.model";
import { GetRecipeById } from "../services/Recipe.service";
import './RecipeReview.scss';

function RecipeReview() {
    const params = useParams();
    const { state } = useLocation(); // todo: redux
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        setRecipe(state as Recipe ?? GetRecipeById(params.recipeId))
    }, []);

    return (
        <div className="row recipe-review align-items-center">
            {recipe && <div className="col-md-10 offset-md-1">
                {/* naslov i slika */}
                <div className="row">
                    <div className={`details-wrapper col-md-${recipe.imageUrl !== '' ? '6' : '12'}`}>
                        <h2 className="primary-font">{recipe.name}</h2>
                        <div className="d-flex flex-row justify-content-between align-items-center mt-4 mb-2">
                            <div>
                                <h5 className="secondary-font">SASTOJCI</h5>
                                <p className="secondary-font">Broj posluživanja: {recipe.personCount}</p>
                            </div>
                            <div className="small-details">
                                <SmallDetails likes={recipe.likes} time={recipe.time} />
                            </div>
                        </div>

                        <ul>
                            {recipe.ingredients?.map((name, i) =>
                                <li key={i} className="primary-font">{name}</li>)}
                        </ul>
                    </div>

                    {recipe.imageUrl !== '' && <div className="col-md-6">
                        <img src={recipe.imageUrl} className="recipe-image" alt="Slika recepta" />
                    </div>}
                </div>
            </div>}
        </div >
    );
}

export default RecipeReview;