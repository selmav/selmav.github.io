import { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Header.scss';
import Popup from './Popup';

interface LoginRequest {
    username: string;
    password: string;
}

function Header() {
    const [modalShow, setModalShow] = useState(false);
    const [popupBody, setPopupBody] = useState<ReactElement | undefined>(undefined);
    const { register, formState: { touchedFields, errors }, getValues, reset } = useForm<LoginRequest>({ mode: 'onBlur' });

    useEffect(() => {
        setPopupBody(loginBody());
    }, [touchedFields?.username, touchedFields?.password, errors?.username, errors?.password]);

    function loginBody() {
        return (<form className="modal-form">
            <div className="modal-form-row">
                <h5 className="secondary-font secondary-font--contrast">Korisničko ime</h5>
                <input {...register('username', { required: true })} className="form-control" type="text" placeholder='Korisničko ime' />
                {touchedFields?.username && errors?.username &&
                    <p className="primary-font primary-font--error">Korisničko ime je obavezno.</p>}
            </div>

            <div className="modal-form-row">
                <h5 className="secondary-font secondary-font--contrast">Lozinka</h5>
                <input {...register('password', { required: true })} className="form-control" type="password" placeholder='Lozinka' />
                {touchedFields?.password && errors?.password &&
                    <p className="primary-font primary-font--error">Lozinka je obavezna.</p>}
            </div>
        </form>);
    }

    function handlePopup(isLogin: boolean = true) {
        reset();
        setPopupBody(isLogin ? loginBody() : undefined);
        setModalShow(true);
    }

    return (
        <>
            <div className="header-text primary-font">
                <h5 className="link" onClick={() => handlePopup()}>Prijava</h5>
                <h5 className="link" onClick={() => handlePopup(false)}>Registracija</h5>
            </div>

            <Popup show={modalShow} onHide={() => setModalShow(false)} body={popupBody} />
        </>
    );
}

export default Header;