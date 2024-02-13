// What would be printed in the console?
function calculateRhombusArea(){
const inputD1=rhombusInput('rhombus-d1');
const inputD2=rhombusInput('rhombus-d2')
if(isNaN(inputD1) || isNaN(inputD2)){
    setArea('rhombus-area','invalid input')
    return;
}

const area=0.5*inputD1*inputD2;
console.log(area);
setArea('rhombus-area',area)
}



function rhombusInput(element){
    const inputValue=document.getElementById(element);
    const innerText=inputValue.value;
    const value=parseFloat(innerText)
    return value;

}

function setArea(areavalu,area){
    const areaoutput=document.getElementById(areavalu)
    areaoutput.innerText=area;

}