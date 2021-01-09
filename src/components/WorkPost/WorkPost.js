import React, {useState} from 'react';
import PropTypes from 'prop-types'


import './css/WorkPost.style.css';

import Icon from '../Icon/Icon';

const WorkPostTemplate = (props) => {
    const [luvCounted, countLuv] = useState((Math.floor((Math.random() * 2000) + 1000)));
    const [isActive, setActive] = useState(false);
    const luvCounter = () => {
        if(isActive === false){
            setActive(true);
            return countLuv(luvCounted + 1);
        }else {
            setActive(false);
            return countLuv(luvCounted - 1);
        }
    }
    return(
        <div className="wp-g-cont">
            <div className="wp-preview-cont" onDoubleClick={luvCounter}>
                {props.children.map(child => child.type.name === "WPTImage" && child) }
                <WPTView>
                    {props.children}
                </WPTView>
                {/* <WPTPreView /> */}
            </div>
            <div className="wp-counter">
                <div className="wp-luv-counter" onClick={luvCounter}>
                    <Icon size={{w: 30, h: 30}} type="heart" ui={`ico luv-ico-fill-less ${isActive ? "luv-ico-ful-fill" : ""}`} />
                    <span>{luvCounted}</span>
                </div>
            </div>
        </div>
    )
}


const WPTTitle = (props) => {
    return (
        <h1 className="wpt-t">{props.children}</h1>
    )
}

const WPTEst = (props) => {
    return (
        <span className="wpt-est">EST&nbsp;{props.children}</span>
    )
}

const WPTView = (props) => {
    return (
        <div className="wpt-bs-view">
            {props.children.map(child => (child.type.name === "WPTTitle" || child.type.name === "WPTEst") && child) }
        </div>
    )
}

const WPTPreView = () => {
    return (
        <div className="wpt-pr-view">
            
        </div>
    )
}

const WPTImage = (props) => {
    return (
        <img src={props["image-src"]} className="wpt-img"/>
        )
    }

// Props types
// WPTTitle = {
//     children: PropTypes.string
// }
// WPTEst = {
//     children: PropTypes.string
// }
// WPTView = {
//     children: PropTypes.element
// }
// WPTImage = {
//     ["image-src"]: PropTypes.string
// }
WorkPostTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}
export {WorkPostTemplate, WPTImage, WPTTitle, WPTEst};