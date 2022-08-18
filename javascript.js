function drawGrid() {
    num = prompt('Enter the number of rows and collumns');
    input = document.querySelector('.input');
    input.textContent = `input - ${num}`;
    let parent = document.querySelector('.divcontainer'); 
    removeChildren(parent);
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('smalldiv');
        
        for (let j = 0; j < num; j++) {
            const mdiv = document.createElement('div');
            mdiv.classList.add('smalldiv');
            mdiv.classList.add('smallerdiv');
            div.appendChild(mdiv);
        }
        parent.appendChild(div);
    }
}

function removeChildren(element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

function turnBlack() {
    elements = document.querySelectorAll('.smallerdiv');
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.background = 'black';
        })
    });
}

function turnWhite() {
    elements = document.querySelectorAll('.smallerdiv');
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.background = 'white';
        })
    });
}

function clear() {
    elements = document.querySelectorAll('.smallerdiv');
    elements.forEach((element) => {
        element.style.background = 'white';
    })
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function turnRainbow() {
    elements = document.querySelectorAll('.smallerdiv');
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.background = `rgb(${randomNumber(1, 256)}, ${randomNumber(1, 256)}, ${randomNumber(1, 256)})`;
        })
    });
}

blackbtn = document.querySelector('.black');
blackbtn.addEventListener('click', turnBlack);

whitebtn = document.querySelector('.white');
whitebtn.addEventListener('click', turnWhite);

clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click', clear);

rainbowbtn = document.querySelector('.rainbow');
rainbowbtn.addEventListener('click', turnRainbow);


drawGrid();

input = document.querySelector('.input');

input.addEventListener('click', drawGrid);