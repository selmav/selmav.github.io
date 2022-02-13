import { useParams } from "react-router";

function RecipeReview() {
    const params = useParams();

    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1">
                {params.recipeId}
            </div>
        </div>
    );
}

export default RecipeReview;