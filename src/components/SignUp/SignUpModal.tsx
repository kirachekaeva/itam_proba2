import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpModal: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null);

    const checkPassword = async (loginData: { username: string; password: string }) => {
        try {
            const response = await fetch('', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
            const data = await response.json();
            setIsValidPassword(data.isValid);
        } catch (error) {
            console.error(error);
            setIsValidPassword(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData = {
            username: username,
            password: password
        };
        checkPassword(loginData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="sign_up">
                    <div className="place">
                        <h2>Войти в аккаунт</h2>
                        <div className="input1">
                            <label className="name" htmlFor="username">Имя пользователя</label>
                            <input
                                type="text"
                                placeholder="введите имя пользователя"
                                className="username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input2">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                placeholder="введите пароль"
                                className="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <label className="pass" htmlFor="password">
                                <a href="#">Забыли пароль?</a>
                            </label>
                        </div>
                        <button type="submit" className="btn">Войти</button>
                        <p>У вас нет аккаунта? <Link to="registr">Зарегистрироваться</Link></p>
                    </div>
                </div>
            </form>
            {isValidPassword !== null && (
                <p>{isValidPassword ? "Пароль корректен" : "Пароль некорректен"}</p>
            )}
        </div>
    );
}

export default SignUpModal;
