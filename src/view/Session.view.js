import React from 'react';

import Nav from "../components/Nav/Nav";
import SubMenu from "../components/SubMenu/SubMenu";
import {WorkPostTemplate, WPTImage, WPTTitle, WPTEst} from "../components/WorkPost/WorkPost";
import { SliderContentBox,SliderParent } from '../components/Slider/index';

const Session = () => {
    return(
        <div className="w-100 bckg-gradient column">
            <Nav />
            <SubMenu />
            <div className="root-cont column">
                <LayoutSlider />
            </div>
        </div>
    )
}

const LayoutSlider = () => {
    return (
        <SliderParent>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
            <SliderContentBox>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
                <WorkPostTemplate>
                    <WPTImage image-src="./img/beautiful-combination-of-brown-wheat-field-and-blue-sky-wallpaper.jpg"/>
                    <WPTTitle>Ja som title</WPTTitle>
                    <WPTEst>4.1.2021</WPTEst>
                </WorkPostTemplate>
            </SliderContentBox>
        </SliderParent>
    )
}

export default Session;