import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import { Recipe } from "../models/Recipe.model";
import { GetLikedRecipes, GetMyRecipes } from "../services/Recipe.service";
import "./Search.scss";

export enum RecipeListType {
    my,
    saved
}

type RecipeListProps = {
    recipeListType: RecipeListType
};

function RecipeList(props: RecipeListProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setRecipes(props.recipeListType === RecipeListType.my ? GetMyRecipes() : GetLikedRecipes());
    }, []);

    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <div className="row-space-between">
                    <h1 className="primary-font" style={{ fontSize: '2.5rem' }}>
                        {
                            {
                                [RecipeListType.my]: 'Moji recepti',
                                [RecipeListType.saved]: 'Sačuvani recepti'
                            }[props.recipeListType]
                        }
                    </h1>

                    {props.recipeListType === RecipeListType.my &&
                        <button type="button" className="button-common" onClick={() => navigate('/main/recipe/add')}>Novi recept</button>}
                </div>

                {!recipes.length ?
                    <div className="no-results">
                        <h3 className="primary-font" style={{ fontSize: '1.8rem' }}>{
                            props.recipeListType === RecipeListType.my ? 'Nemate dodanih recepata.' : 'Nemate sačuvanih recepata.'
                        }</h3>
                    </div> :
                    <div className="results-wrapper">
                        {recipes.map((r, i) =>
                            <Card key={i} {...r} />
                        )}
                    </div>
                }
            </div>
        </div >);
}

export default RecipeList;