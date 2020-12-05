import React from 'react';
import { Link } from 'react-router-dom';

function Header(loggedIn) {
    return (
    <header className="header"> <Link to={loggedIn ? '/sign-in' : '/sign-up'}>{loggedIn ? 'Войти' : 'Регистрация'}</Link></header>
    )
}

export default Header;