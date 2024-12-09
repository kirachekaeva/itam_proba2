import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrModal: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const CreateNewAcc = async (RegisterData: { username: string; password: string }) => {
        try {
            const response = await fetch('', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(RegisterData),
            });
            const data = await response.json();
            if (data.isValid) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const RegisterData = {
            username: username,
            password: password
        };
        CreateNewAcc(RegisterData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="sign_up">
                    <div className="place">
                        <h2>Регистрация</h2>
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
                        </div>
                        <button type="submit" className="btn">Зарегистрироваться</button>
                        <p>Уже есть аккаунт? <Link to="/">Войти</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegistrModal;
