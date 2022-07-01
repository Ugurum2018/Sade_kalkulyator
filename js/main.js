    
    

function calculator() { 
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let opr = document.getElementById('operation').value;      


    if(opr == '+'){
        document.getElementById('result').value = number1 + number2;
    }
    else if(opr == '-'){
        document.getElementById('result').value = number1 - number2;
    }
    else if (opr == '*'){
        document.getElementById ('result').value = number1*number2;
    }
    else{
        document.getElementById('result').value =  number1/number2;
    }    
    
}