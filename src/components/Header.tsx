import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast, Slide, ToastOptions } from "react-toastify";
import { User } from '../models/User.model';
import { login, logout, registration, selectIsLoggedIn, useAppDispatch, useAppSelector } from '../services/Store';
import { ValidateUser } from '../services/User.service';
import './Header.scss';
import InfoTooltip from './InfoTooltip';
import Popup, { PopupProps } from './Popup';

interface LoginRequest {
    username: string;
    password: string;
    email?: string;
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
        const nameAndPw = ((touchedFields?.username && !errors?.username) && (touchedFields?.password && !errors?.password));
        const formValid = isLogin ?
            nameAndPw :
            (nameAndPw && (touchedFields?.email && !errors?.email));
        setProps(!!formValid);
    }, [isLogin, touchedFields?.username, touchedFields?.password, touchedFields?.email, errors?.username, errors?.password, errors?.email]);

    const getHeader = (isLogin: boolean) => <h3 className="secondary-font secondary-font--contrast">{isLogin ? 'Prijava' : 'Registracija'}</h3>
    const validation = 'Polje je obavezno.';
    const validationFormat = 'Neispravan format polja.';
    const usernameRegex = new RegExp('^[A-Za-z0-9\.\-_]+$');
    const usernameMessage = 'Korisničko ime se može sastojati od slova, brojeva i znakova . _ -';
    const emailMessage = 'E-mail adresa se može sastojati od slova, brojeva i znakova - . _ @'

    function submitAction(isRegistration: boolean = false) {
        const user: User = {
            username: getValues('username'),
            password: getValues('password')
        }

        const toastConfig = {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide
        };

        const response = ValidateUser(user);
        if (response.status === 404) {
            if (isRegistration) {
                dispatch(registration(user));
                setModalShow(false);
                toast.success('Uspješna registracija!', toastConfig as ToastOptions);
            } else {
                toast.error('Pogrešni pristupni podaci.', toastConfig as ToastOptions);
            }
        }
        else if (isRegistration) {
            toast.error('Korisnik već postoji.', toastConfig as ToastOptions);
        }
        else if(response.status === 200) {
            dispatch(login(response.userId ?? 0))
            setModalShow(false);
            navigate('/main/search');
        } else {
            toast.error('Pogrešni pristupni podaci.', toastConfig as ToastOptions);
        }
    }

    // LOGIN

    function loginBody() {
        // todo: move this to separate component (LoginForm)?
        return (<form className="modal-form h-250">
            <div className="modal-form-row">
                <div>
                    <h5 className="secondary-font secondary-font--contrast d-inline-block">Korisničko ime</h5>
                    <InfoTooltip message={usernameMessage} />
                </div>
                <input {...register('username', { required: true })} className="form-control" type="text" placeholder='Korisničko ime' />
                {touchedFields?.username && errors?.username &&
                    <p className="primary-font primary-font--error">{validation}</p>}
            </div>

            <div className="modal-form-row">
                <h5 className="secondary-font secondary-font--contrast">Lozinka</h5>
                <input {...register('password', { required: true })} className="form-control" type="password" placeholder='Lozinka' />
                {touchedFields?.password && errors?.password &&
                    <p className="primary-font primary-font--error">{validation}</p>}
            </div>
        </form>);
    }

    function loginFooter(formValid: boolean) {
        return (
            <div className="modal-footer">
                <button type="button" className="button-secondary" onClick={() => setModalShow(false)}>Otkaži</button>
                <button type="button" className={`button-common ${!formValid ? 'button-common--disabled' : ''}`}
                    onClick={() => submitAction()} disabled={!formValid}>
                    Prijavi se
                </button>
            </div>
        );
    }

    // REGISTRATION
    function registrationBody() {
        return (
            <form className="modal-form h-400">
                <div className="modal-form-row">
                    <div>
                        <h5 className="secondary-font secondary-font--contrast d-inline-block">Korisničko ime</h5>
                        <InfoTooltip message={usernameMessage} />
                    </div>
                    <input {...register('username', { required: true, pattern: usernameRegex })} className="form-control" type="text" placeholder='Korisničko ime' />
                    {touchedFields?.username && errors?.username &&
                        <p className="primary-font primary-font--error">{
                            errors.username.type === 'pattern' ? validationFormat : validation
                        }</p>}
                </div>

                <div className="modal-form-row">
                    <h5 className="secondary-font secondary-font--contrast">Lozinka</h5>
                    <input {...register('password', { required: true })} className="form-control" type="password" placeholder='Lozinka' />
                    {touchedFields?.password && errors?.password &&
                        <p className="primary-font primary-font--error">{validation}</p>}
                </div>

                <div className="modal-form-row">
                    <div>
                        <h5 className="secondary-font secondary-font--contrast d-inline-block">E-mail adresa</h5>
                        <InfoTooltip message={emailMessage} />
                    </div>
                    <input {...register('email', { required: true, pattern: new RegExp('^[A-Za-z0-9\-\._]+@[A-Za-z0-9\-\._]+$') })} className="form-control" type="email" placeholder='E-mail adresa' />
                    {touchedFields?.email && errors?.email &&
                        <p className="primary-font primary-font--error">{
                            errors.email.type === 'pattern' ? validationFormat : validation
                        }</p>}
                </div>
            </form>
        )
    }

    function registrationFooter(formValid: boolean) {
        return (
            <div className="modal-footer">
                <button type="button" className="button-secondary" onClick={() => setModalShow(false)}>Otkaži</button>
                <button type="button" className={`button-common ${!formValid ? 'button-common--disabled' : ''}`}
                    onClick={() => submitAction(true)} disabled={!formValid}>
                    Sačuvaj
                </button>
            </div>
        );
    }

    function registrationAction() {
        const user: User = {
            username: getValues('username'),
            password: getValues('password')
        }
    }

    function handlePopup(isLogin: boolean = true) {
        reset();
        setIsLogin(isLogin);
        setModalShow(true);
    }

    function setProps(formValid: boolean) {
        const header = getHeader(isLogin);
        const props: PopupProps = isLogin ? {
            header,
            body: loginBody(),
            footer: loginFooter(formValid)
        } : {
            header,
            body: registrationBody(),
            footer: registrationFooter(formValid)
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