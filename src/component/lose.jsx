import "../style/lose.css"
import setBodyColor from "../setBodyColor.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Lose(props){
    setBodyColor("black");
    const [clicked, setClick] = useState(false);
    const navigate = useNavigate();
    function handleClick(){
        setClick(true);
        props.gold(0 , 0);
        props.stat(0, 100, 0, 100);
        setTimeout(() => {
            navigate("/");
        }, 4000);
    }

    return(
        <div className={clicked? "clicked" : "notCliked"} onClick={()=>handleClick()}>
        <div className="container-lose">
            <div><h1>You Died</h1></div>
        </div>
        </div>
    );
}

export default Lose;