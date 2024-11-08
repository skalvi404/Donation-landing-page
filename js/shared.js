// console.log("shared js work nicely");
function getInputElementById(id){
   const inputvalue=document.getElementById(id).value;
    const inputvalueNumber=parseFloat(inputvalue);
    return inputvalueNumber;
}
function FormateCurrency(amount){
    return '${amount.fofixed(2)}';
}

// function getTextFieldid(id){
//     const
// }

// hidden remove function
function hiddeRemove(id){
    document.getElementById(id).classList.remove(id);
}
// hidden add function

function hiddenAdd(id){
    document.getElementById(id).classList.add(id);
}

// // Histoy Details
// function showHistory(element name ){

// }