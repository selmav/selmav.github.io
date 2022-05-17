import { useEffect, useState } from "react";
import { likeRecipe, selectCurrentUserId, selectIsLiked, useAppDispatch } from "../services/Store";


function Like({ recipeId, onLikeRecipe }: { recipeId: number, onLikeRecipe: Function }) {
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const userId = selectCurrentUserId();
        const isLiked = selectIsLiked(userId, recipeId);
        setIsLiked(isLiked);
    }, []);

    function onLike() {
        const userId = selectCurrentUserId();
        dispatch(likeRecipe({ userId, recipeId, like: isLiked ? -1 : 1 }));
        setIsLiked(!isLiked);
        onLikeRecipe();
    }

    return (
        <div onClick={onLike} className="small-details small-details--clickable" role="button">
            <img className="icon" src="/heart.png" />
            <p className="secondary-font secondary-font--contrast">{isLiked ? 'Ne sviđa mi se' : 'Sviđa mi se'}</p>
        </div>);
}

export default Like;