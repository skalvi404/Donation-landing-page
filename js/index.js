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
       


        if(addInputMoney<=0 || isNaN(addInputMoney)){
            document.getElementById('invalid-1').classList.remove('hidden')
            document.getElementById('card-available-balance').classList.add('hidden')
            return;
        }
      
    })

  


// error handaling for card-1
// document.getElementById('ammount-input')
// .addEventListener('input',function(){
//     if (newCardBalance <=0 || isNaN(newCardBalance)){
//     const cardErro1=InputValidation('invalid-1').classList.remove('hidden')
//        return;
//     }
    
// })




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

    })

    // for card 1
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

    })

