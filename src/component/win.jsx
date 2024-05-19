import "../style/win.css"
import setBodyColor from "../setBodyColor.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Win(){
    setBodyColor("black");
    const [clicked, setClick] = useState(false);
    const navigate = useNavigate();
    function handleClick(e){
        setClick(true);
        setTimeout(() => {
            navigate("/");
        }, 4000);
    }
    return(
        <div className={clicked? "clicked" : "notCliked"} onClick={(e)=>handleClick(e)}>
        <div className="container-win"> 
            <div><h1>You Win!</h1></div>
        </div>
        </div>
    );
}

export default Win;