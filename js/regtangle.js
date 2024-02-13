/**my work  */

// document.getElementById('btn-ragtangle').addEventListener('click',function(){
//     const rectangleWidth=document.getElementById('rectangle-width')
//     const rectangleText=rectangleWidth.value
//     const width=parseFloat(rectangleText)
//     // console.log(width)
//     const rectangleLength=document.getElementById('rectangle-length')
//     const ragtangleLengthText=rectangleLength.value
//     const length=parseFloat(ragtangleLengthText)
//     // console.log(length)

//     const area=length*width
//     console.log(area)
//     const areaResult=document.getElementById('rectangle-area')
//     areaResult.innerText=area
// })

function calculateRectangleArea(){
    // get lenght of the rectangle 
    const lenghtInput= document.getElementById('rectangle-width');
    const lengthText=lenghtInput.value
    const length=parseFloat(lengthText)  
    // console.log(length)  
    // get width of the rectangle 
    const widthinput =document.getElementById('rectangle-length')
    const widthText=widthinput.value;
    const width=parseFloat(widthText)
    // console.log(width);
    // validatoin
    // console.log(lengthText,widthText)
    if(isNaN(lengthText) || isNaN(widthText)){
        const rectangleAreaSpan=document.getElementById('rectangle-area') ;
          rectangleAreaSpan.innerText='invalid input';
    return;
    }
    else if(!(lengthText) || !(widthText)){
        const rectangleAreaSpan=document.getElementById('rectangle-area') ;
        rectangleAreaSpan.innerText='invalid input';
  return;
    }
// calculate area 
    const area=length*width;
    // console.log('rectangle area ', area)
    // displat rectangle area
    const rectangleAreaSpan=document.getElementById('rectangle-area') ;
    rectangleAreaSpan.innerText=area;
}