import React from 'react';
import { useState } from 'react';

function Eye() {
    //設定密碼眼睛
    const [eye, setEye] = useState('password');
    const [pic, setPic] = useState('../../../images/logincat.svg');

    const toggleEye = () => {
        if (eye === 'password') {
            setEye('text');
            setPic('../../../images/logincat_blind.svg');
        } else {
            setEye('password');
            setPic('../../../images/logincat.svg');
        }
       
    };
    const textingCat = ()=>{
            setPic('../../../images/logincat_blind.svg');
        }
    return (
        <>
            <section id="eye">
                <input type={eye} onChange={textingCat}></input>
                <img src={pic} alt="" />
            </section>
        </>
    );
}

export default Eye;
