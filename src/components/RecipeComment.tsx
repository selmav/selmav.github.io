import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserComment } from "../models/Recipe.model";
import { useAppDispatch, addComment } from "../services/Store";
import Popup, { PopupProps } from "./Popup";

type CommentForm = {
    comment: string;
}

function RecipeComment({ recipeId, onAddComment }: { recipeId: number, onAddComment: Function }) {
    const [modalShow, setModalShow] = useState(false);
    const { register, getValues, setValue } = useForm<CommentForm>({ mode: 'onChange', defaultValues: { comment: '' } });
    const dispatch = useAppDispatch();

    const popupProps: PopupProps = {
        header: <h4 className="secondary-font secondary-font--contrast">Ostavi svoj komentar</h4>,
        body: (<textarea className="form-control" rows={4} style={{ height: 'auto' }} {...register('comment')} />),
        footer: <button className="button-common" onClick={addCommentFun}>Sačuvaj</button>
    }

    function addCommentFun() {
        const commentText = getValues().comment;
        if (!!commentText) {
            const comment: UserComment = {
                username: 'vselma', // get current username
                comment: commentText
            }
            dispatch(addComment({ recipeId, comment }));
            onAddComment();
            setValue('comment', '');
        }
        setModalShow(false);
    }

    return (
        <>
            <div onClick={() => setModalShow(true)} className="small-details small-details--clickable" style={{ marginRight: '2rem' }} role="button">
                <img className="icon" src="/comment.png" />
                <p className="secondary-font secondary-font--contrast">Komentariši</p>

            </div>
            <Popup show={modalShow} onHide={() => setModalShow(false)} {...popupProps} />
        </>
    )
}

export default RecipeComment;