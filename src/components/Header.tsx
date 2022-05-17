import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { User } from '../models/User.model';
import { login, logout, selectIsLoggedIn, useAppDispatch, useAppSelector } from '../services/Store';
import { ValidateUser } from '../services/User.service';
import './Header.scss';
import Popup, { PopupProps } from './Popup';

interface LoginRequest {
    username: string;
    password: string;
}

function Header() {
    const [modalShow, setModalShow] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [popupProps, setPopupProps] = useState<PopupProps>({});
    const { register, formState: { touchedFields, errors }, reset, getValues } = useForm<LoginRequest>({ mode: 'onBlur' });
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(({ user }) => selectIsLoggedIn(user));
    const navigate = useNavigate();

    useEffect(() => {
        const formValid = isLogin ?
            ((touchedFields?.username && !errors?.username) && (touchedFields?.password && !errors?.password)) :
            true;
        setProps(!!formValid);
    }, [isLogin, touchedFields?.username, touchedFields?.password, errors?.username, errors?.password]);

    // LOGIN
    const loginHeader = <h3 className="secondary-font secondary-font--contrast">Prijava</h3>

    function loginBody() {
        // todo: move this to separate component (LoginForm)?
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

    function loginFooter(formValid: boolean) {
        return (
            <div className="modal-footer">
                <button type="button" className="button-secondary" onClick={() => setModalShow(false)}>Otkaži</button>
                <button type="button" className={`button-common ${!formValid ? 'button-common--disabled' : ''}`}
                    onClick={loginAction} disabled={!formValid}>
                    Prijavi se
                </button>
            </div>
        );
    }

    function loginAction() {
        const user: User = {
            username: getValues('username'),
            password: getValues('password')
        }

        const response = ValidateUser(user);
        if (response.status === 404) {
            // show error
        }
        else {
            dispatch(login(response.userId ?? 0))
            setModalShow(false);
            navigate('/main/search');
        }
    }

    // REGISTRATION
    function registrationBody() {
        return (
            <p>registration</p>
        )
    }

    function handlePopup(isLogin: boolean = true) {
        reset();
        setIsLogin(isLogin);
        setModalShow(true);
    }

    function setProps(formValid: boolean) {
        const props: PopupProps = isLogin ? {
            header: loginHeader,
            body: loginBody(),
            footer: loginFooter(formValid)
        } : {
            body: registrationBody()
        };
        setPopupProps(props);
    }

    function onLogout() {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            {isLoggedIn ?
                <div className="header-text primary-font">
                    <h5 className="link" onClick={onLogout}>Odjava</h5>
                </div>
                :
                <>
                    <div className="header-text primary-font">
                        <h5 className="link" onClick={() => handlePopup()}>Prijava</h5>
                        <h5 className="link" onClick={() => handlePopup(false)}>Registracija</h5>
                    </div>

                    <Popup show={modalShow} onHide={() => setModalShow(false)} {...popupProps} />
                </>
            }
        </>
    );
}

export default Header;