import SmallDetails from "./SmallDetails";
import './Card.scss';
import { Recipe } from "../models/Recipe.model";

function Card(recipe: Recipe) {
    return (
        recipe &&
        <div className="recipe-wrapper">
            <img src={recipe.imageUrl} alt="Slika recepta" />

            <div className="details-wrapper">
                <div>
                    <h3 className="primary-font primary-font--contrast primary-font--bold">{recipe.name}</h3>
                    <h5 className="primary-font primary-font--contrast">{recipe.description}</h5>
                </div>

                <SmallDetails time={recipe.time} likes={recipe.likes} />
            </div>
        </div>
    )
};

export default Card;