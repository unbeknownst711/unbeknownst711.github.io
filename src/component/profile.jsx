import { Link , Outlet } from "react-router-dom";
import "../style/modal1.css";

function Profile(props){
    const health = props.health;
    const energy = props.energy;
    const gold = props.gold;
    return(
        <>
            <div className="modalBG1">
            <Link to="/App" replace={true}><button className="closeButton">x</button></Link>
                <div className="modalContent1">
                    <div>Money: {gold} G</div>
                    <div>Health: {health}</div>
                    <div>Energy: {energy}</div> 
                    <div><Link to="/App/profile/tutorial" replace={true}><button>tutorial</button></Link></div>      
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Profile;