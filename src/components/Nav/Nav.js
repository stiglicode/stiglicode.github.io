import React, {useState} from 'react';
import Burger from '../BurgerMenu/BurgerMenu';

import './css/Nav.style.css';

const Nav = () => {
    const [burgerStatus, setBurgerStatus] = useState(true);

    const handleBurgerState = (data) => {
        console.log(data);
        setBurgerStatus(data)
    }
    return(
        <div className="row justify-between bs-padd-t bs-padd-b bs-padd-r">
            <span className="sh-box bs-padd-l">{SayHeyMachine()}</span>
            <span className="logo">
                <span>Dev&nbsp;</span>
                <span>Page&nbsp;</span>
                <sub>by stiglicode</sub>
            </span>
            <div className="burgermenu-position">
                <Burger onClickBurgerMenu={handleBurgerState}/>
            </div>
            {/* {!burgerStatus && (<NavMenu styleSheet={!burgerStatus && "bcb-ON"} />)} */}
            <NavMenu styleSheet={!burgerStatus && "bcb-ON"}/>
            {/* <NavMenu styleSheet={"bcb-ON"}/> */}
        </div>
    )
}
const NavMenu = (props) => {
    return (
        <div className={`burgermenu-content-box ${props.styleSheet}`}>
            <span className="bcb-link">
                <span className="bcb-link-t">Contact me</span>
            </span>
            <span className="bcb-link">
                <span className="bcb-link-t">About me</span>
            </span>
        </div>
    )
}
const SayHeyMachine = () => {
    const date = new Date();
    const h = date.getHours();
    if(h >= 5 && h <= 8){
        return "Good morning, darling!"
    }else if(h > 8 && h <= 11 || h > 13 && h <= 17){
        return "Have a nice day!"
    }else if(h >= 12 && h <= 13){
        return "Bon Appétit! ( if you eat )"
    }else if(h > 17 && h <= 22){
        return "Good evening"
    }else if(h > 22 && h <= 23 || h === 1 || h === 0){
        return "Good night, sweety"
    }else if(h > 1 && h <= 4){
        return "Why are you steal wake up ?"
    }
}

export default Nav;