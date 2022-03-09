import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Like from "../components/Like";
import RecipeComment from "../components/RecipeComment";
import SmallDetails from "../components/SmallDetails";
import Step from "../components/Step";
import { Recipe } from "../models/Recipe.model";
import { GetRecipeById } from "../models/Search.mock";
import './RecipeReview.scss';

function RecipeReview() {
    const params = useParams();
    const [recipe, setRecipe] = useState<Recipe>();
    const isLoggedIn = true; // todo

    useEffect(() => {
        setRecipe(GetRecipeById(params.recipeId));
    }, []);

    function onAction() {
        setRecipe({ ...recipe } as Recipe);
    }

    return (
        <div className="row recipe-review align-items-center">
            {recipe && <div className="col-md-10 offset-md-1">
                {/* naslov i slika */}
                <div className="row">
                    <div className={`details-wrapper col-md-${recipe.imageUrl !== '' ? '6' : '12'}`}>
                        <h2 className="primary-font">{recipe.name}</h2>
                        <div className="d-flex flex-column justify-content-between align-items-start mt-2 mb-2">
                            <div className="small-details mb-4">
                                <SmallDetails likes={recipe.likes} time={recipe.time} />
                            </div>

                            <div>
                                <h5 className="secondary-font">SASTOJCI</h5>
                                <p className="secondary-font">Broj posluživanja: {recipe.personCount}</p>
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

                {/* opis */}
                <div className="row">
                    <div className="col-md-12 white-wrapper">
                        <h5 className="secondary-font secondary-font--contrast mb-3">PRIPREMA</h5>
                        <div className="mb-4">
                            {recipe.steps?.sort((a, b) => a.priority < b.priority ? -1 : 0).map((step, i) =>
                                <Step key={i} step={step} index={i} />
                            )}
                        </div>

                        {
                            recipe.serving && recipe.serving !== '' &&
                            <>
                                <h5 className="secondary-font secondary-font--contrast mb-3">POSLUŽIVANJE</h5>
                                <p className="secondary-font secondary-font--contrast mb-4">{recipe.serving}</p>
                            </>
                        }

                        {recipe.advice && recipe.advice !== '' &&
                            <>
                                <h5 className="secondary-font secondary-font--contrast mb-3">SAVJET</h5>
                                <p className="secondary-font secondary-font--contrast mb-4">{recipe.advice}</p>
                            </>}
                    </div>
                </div>

                {/* komentari */}
                {
                    (recipe.comments && recipe.comments.length || isLoggedIn) &&
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="d-flex flex-row justify-content-between mb-4">
                                {recipe?.comments?.length && <h5 className="secondary-font">KOMENTARI</h5>}
                                <div className="d-flex flex-row justify-content-between flex-1">
                                    {!!recipe.id &&
                                        <>
                                            <RecipeComment recipeId={recipe.id} onAddComment={onAction} />
                                            <Like recipeId={recipe.id} onLikeAction={onAction}/>
                                        </>
                                    }
                                </div>
                            </div>
                            {recipe?.comments?.map((comm, i) =>
                                <div className="white-wrapper comment mb-4" key={i}>
                                    <h5 className="secondary-font secondary-font--contrast mb-2">{comm.username}</h5>
                                    <p className="secondary-font secondary-font--contrast">{comm.comment}</p>
                                </div>)
                            }
                        </div>
                    </div>
                }
            </div>}
        </div >
    );
}

export default RecipeReview;