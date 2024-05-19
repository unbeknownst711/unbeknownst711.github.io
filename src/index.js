import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import App from "./component/app";
import LoginScreen from "./component/loginScreen.jsx";
import ModalBox from "./component/modalBox.jsx";
import Start from "./component/startScreen.jsx";
import Consumable from "./component/consumable.jsx";
import Profile from "./component/profile.jsx";
import ShowFact from "./component/showFact.jsx";
import Shop from "./component/shop.jsx";
import Tutorial from "./component/tutorial.jsx";
import Dead from "./component/lose.jsx";

function Index(){
    const [health, setHealth] = useState(100);
    const [energy, setEnergy] = useState(100);
    const [inv, setInv] = useState([]);
    const [gold, setGold] = useState(100);
    const [fact, setFact] = useState("");
    
    function sStat(h , incH, e, incE){
        let tempH = incH;
        if(e !== -1){
            if((e+incE) >= 100) setEnergy(100);
            else if((e+incE) > 0) setEnergy(e + incE);
            else{
                setEnergy(0);tempH += (e+incE);console.log("energy down health decresing");
            }
        }
        if(h !== -1){
            if((h+tempH) > 0) setHealth(h + tempH);
            else{
                setHealth(0);
                console.log("you're dead");
            }
        }
    }
    function facting(x){
        setFact(x);
    }
    function sGold(x , y){
        if(x + y >= 0){setGold(x + y);return 1;}
        else return -1;
    }
    function sInv(x){
        setInv(x);
        console.log(x);
    }

    function GenericNotFound(){
        const nStyle = {
            fontSize: "150px",
            fontWeight: "20px"
        }
        return <div style={nStyle}>404 NOT FOUND</div>
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>} />
                <Route path="/login" element={<LoginScreen/>} >
                    <Route path="/login/aboutUs" element={<ModalBox/>} />
                </Route>
                <Route path="/App" element={<App fact={facting} gold={sGold} goldv={gold} stat={sStat} healthv={health} energyv={energy} />}>
                    <Route path="/App/fact" element={<ShowFact fact={fact} />} />
                    <Route path="/App/consume" element={<Consumable stat={sStat} healthv={health} energyv={energy} inv={sInv} invv={inv}/>} />
                    <Route path="/App/profile" element={<Profile health={health} energy={energy} gold={gold} />}>
                        <Route path="/App/profile/tutorial" element={<Tutorial />}/>
                    </Route>
                    <Route path="/App/shop" element={<Shop gold={sGold} goldv={gold} inv={sInv} invv={inv} />}/>
                </Route>
                <Route path="/dead" element={<Dead gold={sGold} stat={sStat}/>} />
                <Route path='*' exact={true} element={GenericNotFound()} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Index />
);