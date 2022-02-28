import "./AddRecipe.scss";

function AddRecipe() {
    return (
        <div className="row h-100">
            <div className="col-md-10 offset-md-1 content-wrapper">
                <>
                    <h3 className="secondary-font" >Naziv recepta</h3>
                    <input type="text" className="form-control" placeholder="Naziv recepta" />
                </>

                <>
                    <h3 className="secondary-font">Sastojci</h3>
                    <div className="listing">
                        <div className="list-btn secondary-font secondary-font--contrast">+</div>
                        <input className="form-control" type="text"/>
                    </div>
                </>

            </div>
        </div>);
}

export default AddRecipe;