import './styles.css';

let numBtns = [];
let result;
const screen = document.querySelector('.results-screen');
const keypad = document.querySelector('.buttons');

keypad.addEventListener('click', (event)=>{

    const elementName = event.target.localName;
    const keypadElement = event.target;   
    const TRegExp = /\d/;

    
    if (keypadElement.textContent === '='){
                
        screen.innerHTML = '';        
        executor();          

    } else {

        if (elementName.includes('button')&&((keypadElement.classList[1] != 'd'))){    
            
            if (((parseInt(numBtns[0])===result)||(parseFloat(numBtns[0])===result))&&(numBtns.length===1)&&(keypadElement.textContent.match(TRegExp))){
                reset();
            }
            
            numBtns.push(keypadElement.textContent);  

        } else if (keypadElement.classList[1] === 'd') {

            numBtns.pop();

        }

            screen.innerHTML = '';        

        if (keypadElement.textContent != 'c'){
            for (let num of numBtns){
                screen.innerHTML += `${num}`;
            }
        } else {
            reset();
        }
    }
})

const reset = () => {
    numBtns.length = 0;    
}

const executor = () => {

    const string = numBtns.join('');

    reset();    

    result = eval(string)    

    numBtns.push(result.toString());

    screen.innerHTML = `${ result }`;
    

}