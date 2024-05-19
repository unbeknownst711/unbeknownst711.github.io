import { Link } from "react-router-dom";
import kowalski from "../img/profile/kowalski.png";
import skipper from "../img/profile/skipper.png";
import marco from "../img/profile/marco.png";
import Private from "../img/profile/private.png";

export function ModalBox() {
    return (
        <Link to="/login" replace={true}>
            <div className="modalBG">
                <h1>Code Crusaders</h1>
                <div className="modalContent">
                    <div className="pengu"><img src={skipper} alt=""/>
                        <h2>Davin Dick<br></br>00000108484</h2>
                    </div>
                    <div className="pengu"><img src={kowalski} alt="" />
                        <h2>Steven Lee<br></br>00000105886</h2>
                    </div>
                    <div className="pengu"><img src={Private} alt="" />
                        <h2>Charlie Martin<br></br>00000108416</h2>
                    </div>

                    <div className="pengu"><img src={marco} alt="" />
                        <h2>Eldo Sanders<br></br>00000109407</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ModalBox;