import "../style/modal1.css";
import "../style/gameModal.css";
import "../style/shop.css";
import shopList from "./food.jsx"
import { Link } from "react-router-dom";

function Consumable(props){
    const health = props.healthv;
    const energy = props.energyv;
    let inv = props.invv;

    function handleClick(e , key){
        props.stat(health, shopList[e].foodH, energy, shopList[e].foodE);
        inv.splice(key, 1);
    }


    return (
        <div className="modalBG1">
            <Link to="/App" replace={true}><button className="closeButton">x</button></Link>
            <div className="modalContent1 shopItem">
                <div className="items">
                    {inv.map((item, key) => {
                        return (
                            <span key={key} className="item" onClick={() => handleClick(item, key)}>
                                <div className="hideung ilayffud">{shopList[item].foodName}</div>
                                <div className="hideung">Hp: {shopList[item].foodH}<br /> Energy: {shopList[item].foodE}</div>
                                <div className="hideung fuding"><img alt="" src={shopList[item].foodImg}></img></div>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Consumable;