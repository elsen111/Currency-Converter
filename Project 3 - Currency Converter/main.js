// ELEMENT SELECTORS
let menu_icon = document.querySelector('#menu-icon');
let left_currenciesMenuList = document.querySelectorAll('#input-section .currencies-menu ul li')
let right_currenciesMenuList = document.querySelectorAll('#output-section .currencies-menu ul li')
let input = document.querySelector('#input-field input');
let output = document.querySelector('#output-field #output');


// MAKING VISIBLE/NON-VISIBLE MENU ICON (WHEN DECREASING THE SCREEN WIDTH)
let clickCounter = 0;
menu_icon.addEventListener('click', () => {
    clickCounter++;

    if(clickCounter%2==1){
        document.querySelector('#resp-nav').style.display = 'block';
    }

    else{
        document.querySelector('#resp-nav').style.display = 'none';
    }
})


// FUNCTION TO MAKE CONVERTION BETWEEN SPECIALIZED CURRENCIES
function exchanger(from, to){
    let from_to;
    fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector('#input-field .info').textContent = `1 ${data.base} =  ${Object.values(Object.values(data)[4])}  ${Object.getOwnPropertyNames(Object.values(data)[4])}`
    });

    fetch(`https://api.exchangerate.host/latest?base=${to}&symbols=${from}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector('#output-field .info').textContent = `1 ${data.base} =  ${Object.values(Object.values(data)[4])}  ${Object.getOwnPropertyNames(Object.values(data)[4])}`
        from_to = Object.values(Object.values(data)[4])
    });

    input.addEventListener('input', () => {
        output.textContent = (input.value/from_to).toFixed(6);
    })
};


// FUNCTION TO MAKE CONVERTIONS ACCORDING TO CLICKED MENU ITEMS
function app(){
    exchanger('RUB', 'USD');
    for(let i=0; i<left_currenciesMenuList.length; i++){
        left_currenciesMenuList[i].addEventListener('click', () => {
            for(let j=0; j<left_currenciesMenuList.length; j++){
                let value = left_currenciesMenuList[j].style.backgroundColor
                if(value = '#833AE0'){
                    left_currenciesMenuList[j].style.backgroundColor = '#fff';
                    left_currenciesMenuList[j].style.color = '#c6c6c6';
                }
            }
            left_currenciesMenuList[i].style.backgroundColor = '#833AE0';
            left_currenciesMenuList[i].style.color = '#fff';
    
            
            if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'RUB');
            }
        
            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'USD');
            }
            
            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'GBP');
            }

            input.value = '';
            output.textContent = '';
        });
    }


    for(let i=0; i<right_currenciesMenuList.length; i++){
        right_currenciesMenuList[i].addEventListener('click', () => {
    
            for(let j=0; j<right_currenciesMenuList.length; j++){
                let value = right_currenciesMenuList[j].style.backgroundColor
                // value = window.getComputedStyle(currenciesMenuList[j], null).getPropertyValue("background-color")
                if(value = '#833AE0'){
                    right_currenciesMenuList[j].style.backgroundColor = '#fff';
                    right_currenciesMenuList[j].style.color = '#c6c6c6';
                }
            }
            right_currenciesMenuList[i].style.backgroundColor = '#833AE0';
            right_currenciesMenuList[i].style.color = '#fff';
    
            if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'RUB');
            }
        
            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'USD');
            }
            
            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('RUB', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('USD', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('EUR', 'GBP');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[0], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'RUB');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[1], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'USD');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[2], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'EUR');
            }

            else if(window.getComputedStyle(left_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)' && window.getComputedStyle(right_currenciesMenuList[3], null).getPropertyValue("background-color")=='rgb(131, 58, 224)'){
                exchanger('GBP', 'GBP');
            }

            input.value = '';
            output.textContent = '';
        });
    }   
}

// CALLING app() FUNCTION
app();