import React from "react";
import { Route, Link } from 'react-router-dom';

function Header({userData, handleLogout}) {
  return (
      console.log(userData),
    <header className="header">        
        <Route exact path='/'>
      <p>{userData.email}</p>
              <button onClick={handleLogout}>Выйти</button>
            </Route>
            <Route path='/sign-in'>
                <Link to='sign-up'>Регистрация</Link>
            </Route>
            <Route path='/sign-up'>
                <Link to='sign-in'>Войти</Link>
            </Route>
    </header>
  );
}

export default Header;
