import React from 'react';
import '../style/animation.css';
import {showCharacter, changeHair, changeEyes, changeMouth, changeBody, changePants, walkAnim, shieldActivate } from '../animate.js';
//Char Shit
import animeyes1 from '../Assetss/animEyes1.gif';
import head1 from '../Assetss/head1.png';    
import mouth1 from '../Assetss/mouthSmile.png';
import body1 from '../Assetss/body1.png';
import hair1 from '../Assetss/hair1.png';
import handleft from '../Assetss/handLeft.png';
import handright from '../Assetss/handRight.png';
import pantsleft1 from '../Assetss/pants1Left.png';
import pantsright1 from '../Assetss/pants1Right.png';
//Other Shit
import arrowright from '../Assetss/arrowRight.png';
//White Shite
import animeyes1white from '../Assetss/animEyes1White.jpeg';
import mouthwhite1 from '../Assetss/mouth1White.jpeg';
import bodywhite1 from '../Assetss/body1White.jpeg';
import hairwhite1 from '../Assetss/hair1White.jpeg';
import bothpants1white from '../Assetss/pants1White.jpeg';



export default function Animation() {
    return (
        <div id='menu'>


            <div id="all" style={{display: 'flex'}}>
                <div id="select" style={{display: 'block'}}>
                    <div id="hair" style={{display: 'flex'}}>
                        <div>
                            <img style={{width: '100px', height: '100px', border: '5px rgb(39, 168, 228) solid'}} src={hairwhite1} id="hairWhite" />
                        </div>
                        <button onClick={changeHair} id="buttonHair">
                            <img className="arrowRight" src={arrowright} />
                        </button>
                    </div>
                    <div id="eyes" style={{display: 'flex'}}>
                        <div>
                            <img style={{width: '100px', height: '100px', border: '5px rgb(39, 168, 228) solid'}} src={animeyes1white} id="eyesWhite" />
                        </div>
                        <button onClick={changeEyes} id="buttonEyes">
                            <img className="arrowRight" src={arrowright} />
                        </button>
                    </div>
                    <div id="mouth" style={{display: 'flex'}}>
                        <div>
                            <img style={{width: '100px', height: '100px', border: '5px rgb(39, 168, 228) solid'}} src={mouthwhite1} id="mouthWhite" />
                        </div>
                        <button onClick={changeMouth} id="buttonMouth">
                            <img className="arrowRight" src={arrowright} />
                        </button>
                    </div>
                    
                    <div id="clothes" style={{display: 'flex'}}>
                        <div>
                            <img style={{width: '100px', height: '100px', border: '5px rgb(39, 168, 228) solid'}} src={bodywhite1} id="bodyWhite" />
                        </div>
                        <button onClick={changeBody} id="buttonBody">
                            <img className="arrowRight" src={arrowright} />
                        </button>
                    </div>
                    
                    <div id="pants" style={{display: 'flex'}}>
                        <div>
                            <img style={{width: '100px', height: '100px', border: '5px rgb(39, 168, 228) solid'}} src={bothpants1white} id="pantsWhite" />
                        </div>
                        <button onClick={changePants} id="buttonPants">
                            <img className="arrowRight" src={arrowright} />
                        </button>
                    </div>
                </div>

                <div id="char" style={{display: 'block'}}>   
                    <img id="headChar" src={head1}  />
                    <img className="eyesClass" src={animeyes1} />
                    <img id="mouthChar" src={mouth1} />
                    <img id="bodyChar" src={body1} />
                    <img id="hairChar" src={hair1} />
                    <img id="handLeftChar" src={handleft} />
                    <img id="handRightChar" src={handright} />
                    <img id="pantsLeftChar" src={pantsleft1} />
                    <img id="pantsRightChar" src={pantsright1} />
                </div>
            </div>
                <div id="movement" style={{display: 'block'}}>
                    <button onClick={walkAnim} id="buttonWalk">Walk</button>
                    <button onClick={shieldActivate} id="buttonWalk">Shield</button>
                </div>

        </div>
    );
}