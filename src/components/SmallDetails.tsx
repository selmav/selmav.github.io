import './SmallDetails.scss';

function SmallDetails({ time, likes }: { time: string, likes: number }) {
    return (
        <div className="wrapper">
            {time &&
                <>
                    <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/clock-watch-time-timer-stopwatch-wallclock-management-22341.png" />
                    <h4 className="primary-font primary-font--contrast">{time}</h4>
                </>
            }

            {
                likes &&
                <>
                    <img className="icon" src="https://iconarchive.com/download/i66645/designbolts/free-valentine-heart/Heart.ico" />
                    <h4 className="primary-font primary-font--contrast">{likes}</h4>
                </>
            }
        </div >
    );
}

export default SmallDetails;