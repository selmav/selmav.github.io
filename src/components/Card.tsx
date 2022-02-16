import SmallDetails from "./SmallDetails";
import './Card.scss';
import { Recipe } from "../models/Recipe.model";
import { useNavigate } from "react-router-dom";

function Card(recipe: Recipe) {
    const navigate = useNavigate();

    return (
        recipe &&
        <div className="recipe-wrapper" onClick={() => navigate(`/main/recipe/${recipe.id}`, { state: recipe })}> {/*todo: redux*/}
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