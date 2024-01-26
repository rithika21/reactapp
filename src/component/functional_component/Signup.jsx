import "./Login.css"
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className="Login">
            <h1>This  page is meant for your New User Login Credentials</h1>
            <form>
                <form id="form_id" method="post" name="Loginform"><br></br><br></br>
                    <label>User Name : </label>
                    <input type="text" name="username" id="username" /><br></br><br></br>
                    <label>Password :   </label>
                    <input type="password" name="password" id="password" /><br></br><br></br>
                    <label>Email-id : </label>
                    <input type="text" name="emailid" id="emailid" /><br></br><br></br>
                    <label>Mobile No : </label>
                    <input type="number" name="emailid" id="emailid" /><br></br><br></br>

 
                                <input type="Submit" value="Submit" id="submit" /> <input type="reset" value="Clear" id="clear"/>
                <Link to ="/Login">Login</Link>
                </form>
            </form>
        </div>

    )
}
export default Signup;