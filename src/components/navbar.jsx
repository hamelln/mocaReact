import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav id="navbar">
        <div className="navbar__logo">
            <i className="fas fa-utensils"></i>
            <a href="#">FOR</a>
        </div>
        <div className="navbar__menu">
            <ul className="navbar__menu">
                <li className="navbar__menu__item active" data-link="#new">New</li>
                <li className="navbar__menu__item" data-link="#best">Best</li>
                <li className="navbar__menu__item" data-link="#steady">Steady</li>
            </ul>
        </div>

        <button className="navbar__toggle-btn">
            <i className="fas fa-bars"></i>
        </button>
    </nav>
        );
    }
}

export default Navbar;