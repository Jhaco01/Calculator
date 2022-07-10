import './styles.css';

let numBtns = [];
const screen = document.querySelector('.results-screen');
const keypad = document.querySelector('.buttons');

keypad.addEventListener('click', (event)=>{

    const elementName = event.target.localName;
    const keypadElement = event.target;   

    
    if (keypadElement.textContent === '='){
        
        screen.innerHTML = '';        
        executor();          

    } else {

        if (elementName.includes('button')&&((keypadElement.classList[1] != 'd'))){        
            
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

    const result = eval(string)

    screen.innerHTML = `${ result }`;
 

}