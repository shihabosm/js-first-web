/**
 * objective : get base, height of a triangle.calculate the area by using the provided formula.and then display the area
 * step -1: get vaue 
 * step-2;added an id in the base input filed
 * step-3:use getElementById to access the input filed
 * step -4:get value form the input filed .(value is string now)
 * step-5:convert the value to a number. use parse float.
 * 
 */

function calculateTriangleArea(){
    // get triangle base value 
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseText=triangleBaseInput.value
    const base=parseFloat(triangleBaseText)
    console.log( base)
    // console.log(base)

    // get  triangle height value
    const triangleHeightInput=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value
    const height =parseFloat(triangleHeightText)
    console.log(triangleHeightText)

    // calculate triangle 
    // validation 
    if(isNaN(triangleBaseText) || isNaN(triangleHeightText)){
        const triangleAreaSpan=document.getElementById('triangle-area')
    triangleAreaSpan.innerHTML='invalid input'
    return;
    }
    else if(!(triangleBaseText) || !(triangleHeightText)){
        const triangleAreaSpan=document.getElementById('triangle-area')
        triangleAreaSpan.innerHTML='invalid input'
  return;
    }
    // 

    const area=0.5*base*height
    console.log('area  of the triangle is:', area)

    // display triangle area 
    const triangleAreaSpan=document.getElementById('triangle-area')
    triangleAreaSpan.innerHTML=area
    // document.getElementById('triangle-area').innerText=area;
}
