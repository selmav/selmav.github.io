import { ReactElement } from "react";
import { Modal, ModalProps } from "react-bootstrap";

export interface PopupProps {
    header?: ReactElement;
    body?: ReactElement;
    footer?: ReactElement;
}

function Popup(props: ModalProps & PopupProps) {
    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.header ?? <p>Prijava</p>}</Modal.Title>
            </Modal.Header>

            <Modal.Body>{props.body ?? <p>some body</p>}</Modal.Body>

            <Modal.Footer>{props.footer ?? <button onClick={props.onHide}>Prijava</button>}</Modal.Footer>
        </Modal>
    );
}

export default Popup;