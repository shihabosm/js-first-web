function calculatePentagomArea(){
    const perimeter=getInputValueById('pentagon-perimeter');
    const apothem=getInputValueById('pentagon-apothem')
    if(isNaN(perimeter) || isNaN(apothem)){
         setInnerTextById('pentagon-area','invalid input')
        return ;
    }
    const area=0.5*perimeter*apothem;

    setInnerTextById('pentagon-area',area)
    return;
   
}




function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText)
    // console.log(value)
    return value;
}

function setInnerTextById(element,area){
    const text=document.getElementById(element);
    text.innerText=area;
}