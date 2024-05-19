import "../style/modal1.css";
import "../style/gameModal.css";
import "../style/shop.css";
import shopList from "./food.jsx"
import { Link } from "react-router-dom";

function Shop(props) {
    const gold = props.goldv;
    const inv = props.invv;

    function handleClick(x) {
        let cost = shopList[x].foodPrice * -1;
        const t = props.gold(gold, cost);
        cost *= -1;
        if (t > 0) {
            inv.push(shopList[x].foodId - 1);
            props.inv(inv);
        }
    }

    return (
        <div className="modalBG1">
            <Link to="/App" replace={true}><button className="closeButton">x</button></Link>
            <div className="modalContent1 shopItem">
                <div className="gold">{gold}G</div>
                <div className="items">
                    {shopList.map((item, key) => {
                        return (
                            <span key={key} className="item" onClick={() => handleClick(item.foodId - 1)}>
                                <div className="hideung ilayffud">{item.foodName}</div>
                                <div className="hideung">{item.foodPrice}G</div>
                                <div className="hideung">Hp: {item.foodH}<br /> Energy: {item.foodE}</div>
                                <div className="hideung fuding"><img alt="" src={item.foodImg}></img></div>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop;