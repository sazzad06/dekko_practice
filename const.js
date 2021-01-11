const wrapperDiv = document.getElementById("wrapper-div");
const childOne = document.getElementById("child-one");
const childTwo = document.getElementById("child-two");

const childOneHandler = () => {
console.log('Captured on child one')
}

const childTwoHandler = () => {
console.log('Captured on child two')
}

const wrapperDivHandler = () => {
console.log('Captured on wrapper div')
}

const childOneHandlerCatch = () => {
console.log('Captured on child one in capture phase')
}

const childTwoHandlerCatch = () => {
console.log('Captured on child two in capture phase')
}

const wrapperDivHandlerCatch = () => {
console.log('Captured on wrapper div in capture phase')
}


childOne.addEventListener("click", childOneHandler); 
childTwo.addEventListener("click", childTwoHandler); 
wrapperDiv.addEventListener("click", wrapperDivHandler); 

childOne.addEventListener("click", childOneHandlerCatch, true); 
childTwo.addEventListener("click", childTwoHandlerCatch, true); 
wrapperDiv.addEventListener("click", wrapperDivHandlerCatch, true); 