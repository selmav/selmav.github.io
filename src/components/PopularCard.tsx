import { useNavigate } from 'react-router';
import { Recipe } from '../models/Recipe.model';
import './PopularCard.scss';
import SmallDetails from './SmallDetails';


function PopularCard(recipe: Recipe) {
    const navigate = useNavigate();

    return (
        <div className="card-wrapper" onClick={() => navigate(`/main/recipe/${recipe.id}`, { state: recipe })}>
            <img src={recipe.imageUrl} />

            <div className="text-wrapper">
                <div className="details">
                    <h3 className="primary-font primary-font--contrast">{recipe.name}</h3>
                    <SmallDetails time={recipe.time} likes={recipe.likes}></SmallDetails>
                </div>
                {/* <h5 className="primary-font primary-font--contrast link"
                    >Pročitaj više {'>'}</h5> */}
            </div>
        </div>
    );
}

export default PopularCard;