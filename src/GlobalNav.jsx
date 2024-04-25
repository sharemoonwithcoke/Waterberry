import PropTypes from 'prop-types';
import { useState } from 'react';
import './GlobalNav.css';
import menu from './menu';

function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = (path, e) => {
        e.preventDefault();
        setPage(path);
        if (window.innerWidth <= 768) {
            setShowMenu(false);
        }
    };

    const listHtml = menu.map((item) => (
        <li key={item.name} className="global-nav__item">
            <a
                className="global-nav__link"
                href="#"
                onClick={(e) => handleClick(item.path, e)}
            >
                {item.name}
            </a>
            {item.children && item.children.length > 0 && (
                <ul className="global-nav__sublist">
                    {item.children.map((child) => (
                        <li key={child.name} className="global-nav__item">
                            <a
                                className="global-nav__link"
                                href="#"
                                onClick={(e) => handleClick(child.path, e)}
                            >
                                {child.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));

    return (
        <nav className={`global-nav ${className}`}>
            <button className="global-nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? 'Close Menu' : 'Open Menu'}
            </button>
            <ul className={`global-nav__list ${showMenu ? 'global-nav__list--collapsed' : ''}`}>
                {listHtml}
            </ul>
        </nav>
    );
}

GlobalNav.propTypes = {
    className: PropTypes.string,
    setPage: PropTypes.func.isRequired,
};

export default GlobalNav;

