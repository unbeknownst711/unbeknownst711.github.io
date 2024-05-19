import "../style/modal1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Tutorial() {
    const [page, setPage] = useState(1);
    if (page === 1) return (
        <>
            <div className="modalBG1" onClick={() => setPage(page + 1)}>
                <div className="modalContent1">
                    <div>In the top left corner, you have Health and Energy</div>
                    <div>You also have money, which you can use to buy stuff from shop</div>
                    <div>All of that you can check from profile</div>
                </div>
            </div>
        </>
    )
    else if (page === 2) return (
        <>
            <div className="modalBG1" onClick={() => setPage(page + 1)}>
                <div className="modalContent1">
                    <div>The goal of this game is basically collect 10 fact</div>
                    <div>And also correctly answer some question regarding that fact</div>
                    <div>And of course you lose when your health goes to zero</div>
                </div>
            </div>
        </>
    )
    else if (page === 3) return (
        <>
            <div className="modalBG1" onClick={() => setPage(page + 1)}>
                <div className="modalContent1">
                    <div>The walk event may give random event</div>
                    <div>You might meet enemies, get some good events, gain facts, or who knows</div>
                    <div>Some of them have more odd than the other</div>
                </div>
            </div>
        </>
    )
    else if (page === 4) return (
        <>
            <div className="modalBG1" onClick={() => setPage(page + 1)}>
                <div className="modalContent1">
                    <div>Enemy might be weak at first</div>
                    <div>but they grow linearly and might become very strong very soon</div>
                    <div>You might want to keep your health in check, though you can choose to run costing energy</div>
                </div>
            </div>
        </>
    )
    else if (page === 5) return (
        <>
            <div className="modalBG1" onClick={() => setPage(page + 1)}>
                <div className="modalContent1">
                    <div>Most of the mechanic of the game is rng based</div>
                    <div>Though we did put limit to things, like enemies' damage</div>
                    <div>Despite rng based, the condition for winning will always be guaranteed at certain number of turns</div>
                </div>
            </div>
        </>
    )
    else if (page === 6) return (
        <>
            <Link to="/App" replace={true}>
                <div className="modalBG1">
                    <div className="modalContent1">
                        <div>Walk use 15 energy. if you run out of energy, it will cost health</div>
                        <div>so that's another thing to keep in mind</div>
                        <div>You can sleep, but it will cost money proportionate to turns</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Tutorial;

