import '../App.css';
import React, { Component } from 'react';

const calcMaxPos = function(parentWidth, childWidth) {
    return -(((childWidth - parentWidth)/parentWidth)*100);
}

const calcNewPosition = function(pos){
    let newPosition = (sliderPosition + pos);
    if(newPosition > 0){
        newPosition = (sliderPosition + pos)*0.1;
    }
    else if(newPosition < maxPos){
        newPosition = (maxPos+((pos*0.1)));
    }
    return newPosition;
}

const sliderPosUpdate = function(pos) {
    sliders.forEach(item =>{
        item.style.left = `${calcNewPosition(pos)}%`;
    });
}

const onMove = function(event) {
    const mouseMoveNew = event.clientX || event.touches[0].clientX;
    mousePos = mousePos + (mouseMoveNew - mouseMove);
    mouseMove = mouseMoveNew;

    sliderPosUpdate((mousePos/wrapperWidth)*100);
};

const onDown = function(event) {
    mousePos = 0;
    mouseMove = event.clientX || event.touches[0].clientX;
    wrapper.addEventListener('mousemove', onMove, false);
    wrapper.addEventListener('touchmove', onMove, false);
};

const onUp = event => {
    sliderPosition = calcNewPosition((mousePos/wrapperWidth)*100);

    if(sliderPosition <= maxPos){
        sliderPosition = maxPos;
        document.getElementById("slider").style.left = `${maxPos}%`;
    }
    else if(sliderPosition > 0){
        sliderPosition = 0;
        document.getElementById("slider").style.left = '0';
    }
    else{
        sliderPosition = (Math.round(sliderPosition/7.15)*7.15);
        document.getElementById("slider").style.left = `${sliderPosition}%`;
    }
    wrapper.removeEventListener('mousemove', onMove);
    wrapper.removeEventListener('touchmove', onMove);
};

const wrapper = document.getElementById("wrapper");
//else sad
if(wrapper) {
    //Add event listener for wrapper
    wrapper.addEventListener('mousedown', onDown, true);
    wrapper.addEventListener('touchstart', onDown, true);

    //Add event listener for wrapper
    wrapper.addEventListener('mouseup', onUp, true);
    wrapper.addEventListener('touchend', onUp, true);
    wrapper.addEventListener('mouseleave', onUp);
}

const sliders = document.querySelectorAll(".slider");
const slider = sliders[0];

let wrapperWidth = window.width;
let sliderWidth = window.width;
let sliderPosition = 0;
let maxPos = calcMaxPos(wrapperWidth, sliderWidth);
let mousePos = 0;
let mouseMove = 0;

class Calendar extends Component {
    render() {
        return (
            <div class="text-center p-2" style={{"height": "50px"}}>
                <div class="wrapper mx-auto" id="wrapper">
                    <div class="slider" id="slider">
                    <time class="date"><span>1</span></time>
                    <time class="date"><span>2</span></time>
                    <time class="date"><span>3</span></time>
                    <time class="date"><span>4</span></time>
                    <time class="date"><span>5</span></time>
                    <time class="date"><span>6</span></time>
                    <time class="date"><span>7</span></time>
                    <time class="date"><span>8</span></time>
                    <time class="date"><span>9</span></time>
                    <time class="date"><span>10</span></time>
                    <time class="date"><span>11</span></time>
                    <time class="date"><span>12</span></time>
                    <time class="date"><span>13</span></time>
                    <time class="date"><span>14</span></time>
                    </div>
                </div>
            </div>
            )
        }
    }
    
export default Calendar