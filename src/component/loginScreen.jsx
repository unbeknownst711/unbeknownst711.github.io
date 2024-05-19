import "../style/loginScr.css";
import "../style/global.css";
import setBodyColor from "../setBodyColor.jsx";
import { Link, Outlet } from "react-router-dom";


function LoginScreen(){
    setBodyColor("coral");

    return(
        <>
            <div className="login">
                <Link to="/login/aboutUs" replace={true}><button>ABOUT US</button></Link>
                <Outlet/>
            </div>
            <Link to="/App"><button className="loginButton">Play</button></Link>
        </>
    )
}

export default LoginScreen;