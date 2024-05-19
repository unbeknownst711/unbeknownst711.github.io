import "../style/modal.css";
import { Link } from "react-router-dom";

function ShowFact(props){
    return(
        <>
        <Link to="/App" replace={true}>
            <div className="modalBG">
                <div className="modalContent">
                    {props.fact}
                </div>
            </div>
        </Link>
        </>
    )
}

export default ShowFact;