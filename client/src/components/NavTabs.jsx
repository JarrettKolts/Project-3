import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
            <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
                Home
            </Link>
        </li>
    )
}