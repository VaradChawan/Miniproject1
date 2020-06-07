function totCalculate(){
    let amount=document.getElementById('billAmount').value;
    
    let perc=document.getElementById('tipPercentage').value;
    
    let tip=amount*(perc/100);
    
    let total=tip+Number(amount);
    
    document.getElementById('tipAmount').value=tip;
    document.getElementById('totAmount').value=total;
}
