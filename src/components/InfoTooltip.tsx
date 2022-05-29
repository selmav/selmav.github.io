import { OverlayTrigger, Tooltip } from "react-bootstrap";

function InfoTooltip({ message }: { message: string }) {
    return (<>
        <OverlayTrigger
            placement='right'
            overlay={
                <Tooltip id='tooltip-right'>
                    {message}
                </Tooltip>
            }
        >
            <div className="d-inline-block mx-3 rounded-circle text-center"
                style={{
                    width: '20px', background: 'rgba(255, 239, 222, 0.45)', border: '1px solid rgba(87, 51, 13, 0.54)',
                    color: 'rgba(87, 51, 13, 0.54)', fontSize: '0.8rem', cursor: 'pointer'
                }}>i</div>
        </OverlayTrigger>
    </>);
}

export default InfoTooltip;