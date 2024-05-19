import "../style/index.css";
import Menu from "./mainMenu.jsx";
import { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import Test from "./test.jsx";

const menuStyle = {
    display: "flex",
    justifyContent: "space-between"
}

var facted = [];
var quized = [];

function App(props) {
    const [datas, setDatas] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [menuState, setMenu] = useState(1);
    const [turn, setTurn] = useState(1);
    const [monH, setMonH] = useState(0);
    const [quizOpt, setQuizOpt] = useState();
    const [charState, setCharState] = useState(1);
    const [monState, setMonState] = useState(0);
    const [monType, setMonType] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/unbeknownst711/test2/main/facts.json")
            .then(response => response.json())
            .then(result => { return (setDatas(result)) })
            .catch(error => console.log('error', error));

        fetch("https://raw.githubusercontent.com/unbeknownst711/test2/main/quiz.json")
            .then(response => response.json())
            .then(result => { return (setQuiz(result)) })
            .catch(error => console.log('error', error));
    }, []);


    const health = props.healthv;
    if(health === 0) navigate("/dead");
    const energy = props.energyv;
    const gold = props.goldv;
    const [text, setText] = useState("Welcome to blablabla adventure");

    function showHealth() {
        let hs = health;
        var healths = "";
        if(hs>100) hs = 100;
        for (let i = 0; i < (parseInt(hs / 10)); i++) {
            healths += ("\u2665")
        }
        if (hs % 10 !== 0) healths += ("\u2661")
        return healths;
    }

    function showEnergy() {
        var energys = "";
        for (let i = 0; i < (parseInt(energy / 10)); i++) {
            energys += ("\u25A0")
        }
        if (energy % 10 !== 0) energys += ("\u25A1")
        return energys;
    }

    function randEventHandler(x) { //x=1;
        var guaranteed = false;
        setCharState(2);
        props.stat(health, 0, energy, -10);
        console.log("receive " + x);
        setText(" ");
        setTurn(turn + 1); console.log("turn " + turn);
        if(turn % 5 === 0 && turn > 75 && turn <= 100) {x = 0; guaranteed = true;}
        if(turn % 5 === 0 && turn > 100 && turn <= 125) {x = 15; guaranteed = true;}
        setMenu(0);
        setTimeout(() => {
            setCharState(1);
            switch (x) {
                case 0: {
                    setText("Get Fact"); 
                    let v = Math.floor(Math.random() * 10);
                    if(guaranteed) v = Math.floor(turn / 5) - 16;
                    if(facted.find((z)=> z === v+1) === undefined) facted.push(datas[v].factID);
                    console.log(facted);
                    setTimeout(() => {
                        props.fact(datas[v].factContent);
                        setMenu(1);
                        return navigate("/App/fact");
                    }, 1000);
                    break;
                }
                case 1:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11: {
                    setMonState(1);
                    const monHP = Math.floor((Math.random() * 100) / 100 * turn) + 1; console.log(monHP);
                    if(monHP > turn/2) setMonType(1);
                    else setMonType(0);
                    setMonH(monHP);
                    setTimeout(()=>{setText("you encountered a monster with " + monHP + " hp. what do you do?");setMenu(2);} , 1000);
                    break;
                }
                case 2:
                case 4: {
                    props.stat(-1, 0, energy, Math.ceil((100-energy)/10));
                    setText("Found a rest site! 10% of your lost energy recovered!"); 
                    setMenu(1);
                    break;
                }
                case 6:
                case 8:{
                    setText("You found some gold along the way");
                    const addG = Math.floor(Math.random() * 15) + 1;
                    props.gold(gold , addG);
                    setMenu(1);
                    break;
                }
                case 10:
                case 13: {
                    props.stat(health, Math.ceil((100-health)/10), -1, 0);
                    setText("Some holy Spirit bless upon you! 10% of your lost health recovered!"); 
                    setMenu(1);
                    break;
                }
                case 12:
                case 14: setText("hmm weird, nothing seems to happen"); setMenu(1);break;
                case 15: {
                    if(facted.length === 0){setText("hmm weird, nothing seems to happen"); setMenu(1);break;}
                    setText("Let's Test Your Knowledge. Let The Quiz Begun!"); 
                    let v = facted[Math.floor(Math.random() * facted.length)];
                    if(guaranteed) v = facted[Math.floor(turn / 5) - 21];
                    if(quized.find((z)=> z === v) === undefined) quized.push(v);
                    console.log(quized , v);
                    v -= 1;
                    setTimeout(() => {
                        setQuizOpt(quiz[v].options)
                        setText(quiz[v].quizContent);
                        setMenu(3);
                    }, 2000);
                    break;
                }
                default: setText("something is definitely Error, please tell the maker about this");setMenu(1);
            }
        }, 2000);
        return x;
    }

    function fightHandler(x){
        setMenu(0);
        let def = 0;
        var monHP = monH;
        if(x === 1){
            const dmg = Math.floor(Math.random() * 100) + 1;
            monHP = monH - dmg;
            setMonH(monHP);
            setText("you deal " + dmg + " damage. " + monHP + " hp left.");
        }
        if(x === 2){
            setCharState(3);
            def = Math.floor(Math.random() * 40) + 11;
            console.log("defended " + def + "%");
        }
        if(x === 4){
            const dmg = Math.floor(Math.random() * turn) + 1;
            setText("you choose to run away costing " + dmg + " energy");
            setMonState(0);
            (dmg <= 100)?props.stat(health, 0, energy, (-1 * dmg)) : props.stat(health, 0, energy, -100);
            return setMenu(1);
        }
        setTimeout(()=>{
            setCharState(1);
        if(monHP > 0){
            let dmg = Math.floor(Math.random() * turn) + 1;
            if(dmg < 5) dmg = 5;
            if(dmg > 70) dmg = 70;
            console.log("mon dmg " + dmg);
            dmg = Math.ceil((100 - def)/100 * dmg);
            setText("monster dealt " + dmg + " damage to you");
            dmg *= -1;
            props.stat(health, dmg, -1, 0);
            setMenu(2);
        }
        else {
            setText("monster have been defeated! you get gold!");
            setMonState(0);
            const addG = Math.floor(Math.random() * 15) + 6;
            props.gold(gold , addG);
            setTimeout(() => {
                setMenu(1);
            }, 1000);
        }
        }, 2000);
    }

    function sleep(){
        if(energy === 100) return setText("energy full");
        const goldN = -1 * turn;
        const conf = props.gold(gold , goldN);
        if(conf === 1){
            setText("You sleep well. Regain 50 energy, costing " + turn + " G");
            props.stat(-1, 0, energy, 50);
        }
        else if(conf === -1) setText("Not enough money");
    }

    function quizHandler(x){
        console.log(x);
        setMenu(1);
        return x;
    }

    return (
        <>
            <div className="spacing bg1">
                <div style={menuStyle}>
                    <span className="lifeBar">
                        <div className="health">{showHealth()}</div>
                        <div className="energy">{showEnergy()}</div>
                    </span>
                    <span>
                        <Link to="/App/profile" replace={true}><button className="profiles">PROFILE</button></Link>
                        <div>Money: {gold}G</div>
                    </span>
                </div>
            </div>
            <div className="spacing bg2" >
                <Test state={charState} mon={monState} monType={monType} />
            </div>
            <div className="spacing bg3">
                {text}
            </div>
            <div className="spacing bg4">
                <Menu state={menuState} opts={quizOpt} qEvent={quizHandler} sEvent={sleep} rEvent={randEventHandler} fEvent={fightHandler} />
            </div>
        </>
    );

}

export default App;