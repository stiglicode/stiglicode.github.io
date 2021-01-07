import React from 'react';
import "./css/icons.style-classes.css";

const Icon = (props) => {
    if(props.type === "heart"){
        return (
                <Heart propositions={props.size} ui={props.ui}/>
        )
    }
    else if(props.type === "filter"){
        return (
                <Filter propositions={props.size} ui={props.ui}/>
        )
    }
    else if(props.type === "grid-row"){
        return (
                <GridRow propositions={props.size} ui={props.ui}/>
        )
    }
    else if(props.type === "grid"){
        return (
                <Grid propositions={props.size} ui={props.ui}/>
        )
    }else if(props.type === "arrow"){
        return (
                <Arrow propositions={props.size} ui={props.ui}/>
        )
    }
};

const Heart = (props) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height={props.propositions.h} 
        width={props.propositions.w}
        viewBox="0 0 24 24" 
        >
        <path d="M0 0h24v24H0V0z" 
        fill="none"/>
        <path
        className={props.ui}
        d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
        />
    </svg>
    )
}
const Filter = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            enable-background="new 0 0 24 24" 
            height={props.propositions.h} 
            width={props.propositions.w}
            viewBox="0 0 24 24" 
            >
            <g>
                <path 
                    d="M0,0h24 M24,24H0" 
                    fill="none"
                    />
                <path 
                    d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
                    className={props.ui}
                    />
                <path 
                    d="M0,0h24v24H0V0z" 
                    fill="none"/>
            </g>
        </svg>
    )
}
const Grid = (props) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24" 
        viewBox="0 0 24 24" 
        height={props.propositions.h} 
        width={props.propositions.w}
        >
            <path 
                d="M0 0h24v24H0z" 
                fill="none"
            />
            <path 
                d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"
                className={props.ui}
                />
        </svg>
    )
}
const GridRow = (props) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        enable-background="new 0 0 24 24" 
        viewBox="0 0 24 24" 
        height={props.propositions.h} 
        width={props.propositions.w}
        >
        <g>
            <rect 
                fill="none" 
                height="24" 
                width="24"
                />
            <rect 
                fill="none" 
                height="24" 
                width="24"
                />
            <path 
                d="M21.65,7.65l-2.79-2.79C18.54,4.54,18,4.76,18,5.21V7H4C3.45,7,3,7.45,3,8v0c0,0.55,0.45,1,1,1h14v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C21.84,8.16,21.84,7.84,21.65,7.65z"
                className={props.ui}
                />
            <path 
                className={props.ui}
                d="M2.35,16.35l2.79,2.79C5.46,19.46,6,19.24,6,18.79V17h14c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H6v-1.79 c0-0.45-0.54-0.67-0.85-0.35l-2.79,2.79C2.16,15.84,2.16,16.16,2.35,16.35z"/>
        </g>
    </svg>
    )
}
const Arrow = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height={props.propositions.h} 
            width={props.propositions.w}
            viewBox="0 0 24 24"
            >
                <path 
                    d="M0 0h24v24H0V0z" 
                    fill="none" 
                    opacity=".87"
                    />
                <path 
                    className={props.ui}
                    d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                />
        </svg>
    )
}
export default Icon;