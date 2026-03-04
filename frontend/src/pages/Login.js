import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

import '../css/Login.css'
function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const submitLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/auth/login?username=${username}&password=${password}`, {
                method: 'POST'
            });
            if (!response.ok) {
                alert('Invalid credentials');
                return;
            }
            const result = await response.text();
            localStorage.setItem('token', result);
            navigate('/admin');
        } catch (error) {
            console.error('Login error:', error);
        }
    };


    return(
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="password-wrapper">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>

                <button type="button" className="login-submit" onClick={submitLogin}>Login</button>
            </form>
        </div>
    );
}
export default Login;