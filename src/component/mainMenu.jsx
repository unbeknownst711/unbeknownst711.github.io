import { Outlet, Link } from "react-router-dom";
import "../style/menu.css"

function Menu(props) {
    function exploreEvent() {
        const x = Math.round(Math.random() * 15);
        props.rEvent(x);
    }

    function fightEvent(x) {
        props.fEvent(x);
    }

    function quizShuffle() {
        console.log(props.opts);
        let quizOpts = [...props.opts];
        for (let i = quizOpts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = quizOpts[i];
            quizOpts[i] = quizOpts[j];
            quizOpts[j] = temp;
        }
        return quizOpts;
    }

    function Menu3() {
        const quizOpts = quizShuffle();
        console.log(quizOpts);
        return (
            <div className="menu2">
                {quizOpts.map((quizOpt , key)=>{return <button key={key} onClick={() => props.qEvent(quizOpt.value)}>{quizOpt.content}</button>})}
            </div>
        )
    }

    function Menu2() {
        return (
            <div className="menu">
                <button onClick={()=>fightEvent(1)}>ATTACK</button>
                <button onClick={()=>fightEvent(2)}>DEFEND</button>
                <Link to="/App/consume" replace={true}><button>INVENTORY</button></Link>
                <button onClick={()=>fightEvent(4)}>EVADE</button>                
            </div>
        )
    }

    function Menu1() {
        return (
            <div className="menu">
                <button onClick={() => exploreEvent()}>WALK</button>
                <Link to="/App/consume" replace={true}><button>INVENTORY</button></Link>
                <Link to="/App/shop" replace={true}><button>SHOP</button></Link>
                <button onClick={() => props.sEvent()}>SLEEP</button>
            </div>
        )
    }



    if (props.state === 1) return (<><Outlet /><Menu1 /></>);
    if (props.state === 2) return (<><Outlet /><Menu2 /></>);
    if (props.state === 3) return (<><Outlet /><Menu3 /></>);
}

export default Menu;