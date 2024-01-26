import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="Login">
            <h1>This  page is meant for your User Login Credentials</h1>
            <form>
                <form id="form_id" method="post" name="Loginform"><br></br><br></br>
                    <label>User Name :</label>
                    <input type="text" name="username" id="username" /><br></br><br></br>
                    <label>Password :</label>
                    <input type="password" name="password" id="password" /><br></br><br></br>
                    


                    <input type="button" value="Submit" id="submit" /> <input type="button" value="Clear" id="clear" /> <Link to="/Signup">Signup</Link>
                </form>
            </form>
        </div>

    )
}
export default Login;