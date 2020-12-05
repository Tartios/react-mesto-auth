import React from "react";

export default function Login(handleLogin) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let { password, email } = data;
    handleLogin(password, email);
  };
  return (
    <div className="sign-form">
      <h1 className="sign-form__header">Вход</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          className="sign-form__input"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="sign-form__input"
          type="password"
          placeholder="Пароль"
          required
        ></input>
        <button type="submit" className="sign-form__button">Войти</button>
      </form>
    </div>
  );
}
