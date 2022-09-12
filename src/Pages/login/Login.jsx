import "./Login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Connect-Wing</h3>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email or Phone Number" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account

                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
