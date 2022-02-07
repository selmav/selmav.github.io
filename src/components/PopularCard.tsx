import './PopularCard.scss';
import SmallDetails from './SmallDetails';

interface PopularCardProps {
    imageUrl: string;
    name: string;
    time: string;
    likes: number;
}

function PopularCard(props: PopularCardProps) {
    return (
        <div className="card-wrapper">
            <img src={props.imageUrl} />

            <div className="text-wrapper">
                <div className="details">
                    <h3 className="primary-font primary-font--contrast">{props.name}</h3>
                    <SmallDetails time={props.time} likes={props.likes}></SmallDetails>
                </div>
                <h5 className="primary-font primary-font--contrast link">Pročitaj više {'>'}</h5>
            </div>
        </div>
    );
}

export default PopularCard;