import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import { selectIsLoggedIn, useAppSelector } from "../services/Store";
import './Layout.scss';

type NavigationLink = {
    name: string,
    url: string,
    imageUrl: string,
    requiresLogin?: boolean
}

function Layout() {
    const location = useLocation();
    const navigationLinks: NavigationLink[] = [
        { name: 'Početna', url: '/', imageUrl: 'https://iconarchive.com/download/i96324/iconsmind/outline/Home-2-2.ico' },
        { name: 'Pretraga', url: '/main/search', imageUrl: '/search.png' },
        { name: 'Namirnice', url: '/main/ingredients', imageUrl: 'https://iconarchive.com/download/i88133/icons8/ios7/Food-Vegetarian-Food.ico' },
        { name: 'Moji recepti', url: '/main/recipe/my', imageUrl: 'https://cdn-icons-png.flaticon.com/128/768/768818.png', requiresLogin: true },
        { name: 'Sačuvani recepti', url: '/main/recipe/saved', imageUrl: '/heart-black.png', requiresLogin: true }
    ];

    const activatedRoute = location?.pathname;
    const isLoggedIn = useAppSelector(({ user }) => selectIsLoggedIn(user));

    // useEffect(() => {
    //     setIsLoggedIn(selectIsLoggedIn());
    // }, []);

    const linkElement = (link: NavigationLink, i: number) =>
        <>
            <img className="icon" src={link.imageUrl} />
            <Link to={link.url}>
                <h5 className={`primary-font primary-font--contrast link ${link.url === activatedRoute ? 'activated' : ''}`}>
                    {link.name}
                </h5>
            </Link>
        </>

    return (
        <div className="container-fluid">
            <ToastContainer />
            <div className="row row-content">
                <div className="col-md-3 navigation">
                    <div className="links">
                        {navigationLinks.map((link, i) =>
                            <div key={i}>
                                {(!link.requiresLogin && linkElement(link, i)) || (isLoggedIn && linkElement(link, i))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="col-md-9 content">
                    <div className="header-wrapper"><Header /></div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;