const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const digitalSecond = document.querySelector('.seconds');
const digitalMinutes = document.querySelector('.minutes');
const digitalHour = document.querySelector('.hour');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    digitalSecond.innerText = seconds.toString().padStart(2,'0');

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    digitalMinutes.innerText = minutes.toString().padStart(2,'0');

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    digitalHour.innerText = hours.toString().padStart(2,'0');
}
setInterval(setDate, 1000);
setDate();

                            // For Dragging //

const body = document.querySelector('body');
let x = 0;
let y = 0;

const ele = document.querySelector('#drag-canvas');

const mouseDown = function (e) {
    x = e.clientX;
    y = e.clientY;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}
const mouseMove = function(e){
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;

    x = e.clientX;
    y = e.clientY;
}
const mouseUp = function(e){
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}
ele.addEventListener('mousedown', mouseDown);

