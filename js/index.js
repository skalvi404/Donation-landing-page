// console.log("Index Js work properly");

const addMoney = document.getElementById('btn-donation')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney = getInputElementById('ammount-input')
        console.log(addInputMoney);

        const cardAvailableBalance = getTextFieldid('card-available-balance')
        console.log(cardAvailableBalance);

        const newCardBalance = addInputMoney + cardAvailableBalance;
        console.log(newCardBalance);
        document.getElementById('card-available-balance').innerText = newCardBalance;


    // Add Input Ammount In Main Balance For Card-1


const mainBalance=getTextFieldid('main-balance')
console.log(mainBalance);
const newMainBalance=mainBalance-addInputMoney;
console.log(newMainBalance);

//Main Balance Show in Display
document.getElementById('main-balance').innerText=newMainBalance;




        // INPUT VALIDATION FOR CARD-1

        if(addInputMoney<=0 || isNaN(addInputMoney)){
            document.getElementById('invalid-1').classList.remove('hidden')
            document.getElementById('card-available-balance').classList.add('hidden')
            return;
        }
    // For Positive Number-Card-1
        if(addInputMoney>0 || NaN(addInputMoney)){
            document.getElementById('invalid-1').classList.add('hidden')
            document.getElementById('card-available-balance').classList.remove('hidden')
            return;
        }
    })



// for card-2
const addMoney2 = document.getElementById('btn-donation2')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney2 = getInputElementById('ammount-input2')
        console.log(addInputMoney2);

        const cardAvailableBalance2 = getTextFieldid('card-available-balance2')
        console.log(cardAvailableBalance2);

        const newCardBalance2 = addInputMoney2 + cardAvailableBalance2;
        console.log(newCardBalance2);
        document.getElementById('card-available-balance2').innerText = newCardBalance2;
        FormateCurrency(newCardBalance2);

// INPUT VALIDATION FOR CARD-2
if(addInputMoney2 <=0 || isNaN(addInputMoney2)){
    document.getElementById('invalid-2').classList.remove('hidden')
    document.getElementById('card-available-balance2').classList.add('hidden')
    return;
}

// For Positive Number-Card-2

if(addInputMoney2>0 || NaN(addInputMoney2)){
    document.getElementById('invalid-2').classList.add('hidden')
    document.getElementById('card-available-balance2').classList.remove('hidden')
    return;
}


        
    })

    // for card-3
const addMoney3 = document.getElementById('btn-donation3')
    .addEventListener('click', function () {
        // console.log("donate button working properly");
        const addInputMoney3 = getInputElementById('ammount-input3')
        console.log(addInputMoney3);

        const cardAvailableBalance3 = getTextFieldid('card-available-balance3')
    console.log(cardAvailableBalance3);
    
        const newCardBalance3 = addInputMoney3 +cardAvailableBalance3;
        console.log(newCardBalance3);
        document.getElementById('card-available-balance3').innerText = newCardBalance3;
        FormateCurrency(newCardBalance3);



// INPUT VALIDAION FOR CARD-3

if(addInputMoney3 <=0 || isNaN(addInputMoney3)){
    document.getElementById('invalid-3').classList.remove('hidden')
    document.getElementById('card-available-balance3').classList.add('hidden')
    return;
}

// For Positive Number-Card-3

if(addInputMoney3>0 || NaN(addInputMoney3)){
    document.getElementById('invalid-3').classList.add('hidden')
    document.getElementById('card-available-balance3').classList.remove('hidden')
    return;
}

    })




