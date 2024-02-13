
function calculateEllipsisArea(){
    const ellipsisA=ellipsisInputValue('ellipsis-a')
    const ellipsisB=ellipsisInputValue('ellipsis-b')
    if(isNaN(ellipsisA) || isNaN(ellipsisB)){
        ellipsisOutput('ellipsis-area','invalid input')
        return;
    }
   

    const area=Math.PI*ellipsisA*ellipsisB
    // console.log(area)
    ellipsisOutput('ellipsis-area',area)
}

function ellipsisInputValue(element){
    const ellipsisInput=document.getElementById(element);
    const ellipisText=ellipsisInput.value;
    const value=parseFloat(ellipisText)
    return value;

}
function ellipsisOutput(element,area){
    const areaO=document.getElementById(element)
    areaO.innerText=area;

}