export enum RecipeListType {
    my,
    saved
}

type RecipeListProps = {
    recipeListType: RecipeListType
};

function RecipeList(props: RecipeListProps) {
    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <h1 className="primary-font" style={{ fontSize: '2.5rem' }}>
                    {
                        {
                            [RecipeListType.my]: 'Moji recepti',
                            [RecipeListType.saved]: 'Sačuvani recepti'
                        }[props.recipeListType]
                    }
                </h1>
            </div>
        </div >);
}

export default RecipeList;