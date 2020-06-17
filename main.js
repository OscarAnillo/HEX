let hexNumber = [0,1,2,3,4,5,6,7,8,9, 'A','B','C', 'D', 'E', 'F'];
let hexbtn = document.querySelector('.btn');
let bodybg = document.querySelector('body');
let hex = document.querySelector('.hex');

hexbtn.addEventListener('click', getHex);

function getHex(){
    let hexColor = '#';

    for(i=0; i<6; i++){
        let random = Math.floor(Math.random() *hexNumber.length);
        hexColor += hexNumber[random];
           
    }

    bodybg.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;
}   
