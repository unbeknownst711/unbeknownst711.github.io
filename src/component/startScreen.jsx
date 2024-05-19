import "../style/global.css";
import "../style/start.css";
import Neon from "../img/neon-map.jpg"
import setBodyColor from "../setBodyColor.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Start(){
    const [clicked, setClick] = useState(false);
    setBodyColor("black");
    const navigate = useNavigate();
    function handleClick(e){
        setClick(true);
        setTimeout(() => {
            navigate("./login");
        }, 5000);
    }

    return(
        <> 
            <div className={clicked? "map clicked" : "map"} onClick={(e)=>handleClick(e)}>
                <img src={Neon}/>
            </div>
        </>
    )
}

export default Start;