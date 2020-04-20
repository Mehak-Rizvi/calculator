function addInputToDisplay(number) {
    var b = document.getElementById("output-value").innerHTML;//7
    b += number;
    document.getElementById("output-value").innerHTML = b;
}

function clearOutput(){
    document.getElementById("output-value").innerHTML = " ";
}

function getAnswer(){
    var exp = document.getElementById("output-value").innerHTML//7+7
    var answer = eval(exp);

    //update the display with the answer
    var finalAnswer = parseFloat(answer);//*DECIMAL*:parseFloat is gonna change the integer value to float(7.1+1.1)=8.2
    document.getElementById("output-value").innerHTML = finalAnswer;
}

function removeLastcharacter(){
    //7+1-2/5 (press esp to remove 5)
    var inputValue =  document.getElementById("output-value").innerHTML;
    if(inputValue.length >  0){
        inputValue = inputValue.slice(0,-1);
    }
    document.getElementById("output-value").innerHTML = inputValue;

}

