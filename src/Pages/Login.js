import "./Login.css"

function Login()
{
    return(
        <div className="login">
            <p className="LoginHeading"><b>LOGIN</b></p>
            <div className="fields">
                <input type="text" className="login_field" placeholder="E-MAIL OR PHONE NUMBER"/>
                <input type="text" className="password_field" placeholder="PASSWORD"/>
                <button>Login</button>
            </div>
            <div></div>
        </div>
    );
}
export default Login;