import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import './Layout.scss';

function Layout() {
    const location = useLocation();
    const navigationLinks = [
        { name: 'Početna', url: '/', imageUrl: 'https://iconarchive.com/download/i96324/iconsmind/outline/Home-2-2.ico' },
        { name: 'Pretraga', url: '/main/search', imageUrl: '/search.png' },
        { name: 'Namirnice', url: '/main/ingredients', imageUrl: 'https://iconarchive.com/download/i88133/icons8/ios7/Food-Vegetarian-Food.ico' }
    ];

    const activatedRoute = location?.pathname;

    return (
        <div className="container-fluid">
            <div className="row row-content">
                <div className="col-md-2 navigation">
                    <div className="links">
                        {navigationLinks.map((link, i) =>
                            <div key={i}>
                                <img className="icon" src={link.imageUrl} />
                                <Link to={link.url}>
                                    <h4 className={`primary-font primary-font--contrast link ${link.url === activatedRoute ? 'activated' : ''}`}>
                                        {link.name}
                                    </h4>
                                </Link>
                            </div>)}
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