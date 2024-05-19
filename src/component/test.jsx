import Char1 from '../Assetss/char1.png'
import Walk1 from '../Assetss/walk1.gif'
import Shield1 from '../Assetss/shield1.gif'
import Monster2 from '../Assetss/monster2.png'
import Monster1 from '../Assetss/monster1.png'
import '../style/animation.css';

export default function Test(props) {
    const x = props.state;
    const y = props.mon;
    const z = props.monType;
    if(x===1)
    return (
        <div id="charTest" style={{ display: 'flex' }}>
            <div id="hero">
                <img alt="" src={Char1}></img>
            </div>
            <div className={y?"monsterFade monster":"monsterFade"}>
                <img alt="" src={z?Monster2 : Monster1}></img>
            </div>
        </div>


    );
    if(x===2)
        return(
            <div id="charTest" style={{ display: 'flex' }}>
            <div id="hero">
                <img alt="" src={Walk1}></img>
            </div>
            <div className={y?"monsterFade monster":"monsterFade"}>
                <img alt="" src={z?Monster2 : Monster1}></img>
            </div>
        </div>
    );
    if(x===3)
        return(
            <div id="charTest" style={{ display: 'flex' }}>
            <div id="hero">
                <img alt="" src={Shield1}></img>
            </div>
            <div className={y?"monsterFade monster":"monsterFade"}>
                <img alt="" src={z?Monster2 : Monster1}></img>
            </div>
        </div>
    );
}