import "./Register.css";

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Connect-Wing <br /> SignUp</h3>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Enter your Name" className="loginInput" />
                        <input placeholder="Email or Phone Number" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Confirm password" className="loginInput" />

                        <button className="loginButton">SignUp</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            LogIn

                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
