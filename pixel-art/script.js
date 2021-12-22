const colorDefault = document.querySelector('#default');
const secondColor = document.querySelector('#secondColor');
const thirdColor = document.querySelector('#thirdColor');
const fourthColor = document.querySelector('#fourthColor');
const pixelClass = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('#clear-board')
const input = document.querySelector('#board-size');
const generateBoard =  document.querySelector('#generate-board');

function generateColor() {
    let r = Math.random() * 254;
    let b = Math.random() * 254;
    let g = Math.random() * 254; 

    return `rgb(${r},${g},${b})`
}


function addboxs() {
    let pixelBoard = document.querySelector('#pixel-board')
    let total = 5
    for (let i = 0; i < total ;i+=1){
        let box = document.createElement('section');
        box.classList.add('divisor');
        pixelBoard.appendChild(box);
        for (let j = 0; j < total; j+=1){
            let box = document.createElement('div');
            box.classList.add('pixel');
            pixelBoard.appendChild(box);
        }  
    }
} 
addboxs()

function addMoreBoxes() {
    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.innerHTML = ''
    let total = parseInt(input.value)
    if (total < 5 ){
        total = 5
    } else if (total >= 50) {
        total = 50
    } else if (!total) {
       window.alert('Board inválido!')
       total = 5
    }
    for (let i = 0; i < total ;i+=1){
        let box = document.createElement('section');
       
        box.classList.add('divisor');
        pixelBoard.appendChild(box);
        for (let j = 0; j < total; j+=1){
            let box = document.createElement('div');
            box.classList.add('pixel');
            pixelBoard.appendChild(box);
        }  
    }
}   

generateBoard.addEventListener('click',addMoreBoxes)

function getColor() {
    colorDefault.style.backgroundColor = 'black';
    secondColor.style.backgroundColor = generateColor();
    thirdColor.style.backgroundColor = generateColor();
    fourthColor.style.backgroundColor = generateColor();
  }
  getColor()

function addRemoveClass(event) {
    const selector = document.querySelector('.selected');
    selector.classList.remove('selected');
    event.target.classList.add('selected');
}

colorDefault.addEventListener('click', addRemoveClass);
secondColor.addEventListener('click', addRemoveClass);
thirdColor.addEventListener('click', addRemoveClass);
fourthColor.addEventListener('click', addRemoveClass);

function adicionaCorPixel() {
    const pixelBoard =  document.querySelector('#pixel-board')
    pixelBoard.addEventListener('click', (event) => {
        const Color = document.querySelector('.selected').style.backgroundColor;
        const pixelSelec = event.target;
        if (pixelSelec.className === 'pixel') {
            pixelSelec.style.backgroundColor = Color
        }
    })      
};
adicionaCorPixel()

function limparBoard() {
    const selectPixel = document.querySelectorAll('.pixel'); 
    for (let i =  0; i < selectPixel.length; i+=1) {
        selectPixel[i].style.backgroundColor = 'white'
    }
}
clearBoard.addEventListener('click', limparBoard)
