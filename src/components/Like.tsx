import { useEffect, useState } from "react";
import { GetIsLiked, SetLikedRecipe } from "../models/Search.mock";


function Like({ recipeId }: { recipeId: number }) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const isLiked = GetIsLiked(recipeId);
        setIsLiked(isLiked);
    }, []);

    function onLike() {
        const isLiked = SetLikedRecipe(recipeId);
        setIsLiked(isLiked);
    }

    return (
        <div onClick={onLike} className="small-details small-details--clickable" role="button">
            <img className="icon" src="/heart.png" />
            <p className="secondary-font secondary-font--contrast">{isLiked ? 'Ne sviđa mi se' : 'Sviđa mi se'}</p>
        </div>);
}

export default Like;