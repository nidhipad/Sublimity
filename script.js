/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function writeAnimation(element,message,delay,cursorDelay){
delay=delay||100
cursorDelay=cursorDelay||500
var showPointer = 0
function togglePointer(){if(showPointer){showPointer=0;try{document.querySelector("#cursorElm").outerHTML = "";}catch(err){1} return}showPointer=1; element.innerHTML += "<a id='cursorElm' style='color: white;position:absolute;'>|</a>"}
var currentMessage = ""
var writeIndex = 0
element.innerHTML = ""
var interval = setInterval(writeText, delay)
var caretInterval = setInterval(togglePointer, cursorDelay)
function writeText(){
if(writeIndex>=message.length){clearInterval(interval);  return}
currentMessage += message[writeIndex]
element.innerHTML = currentMessage + (function(){if(showPointer){return "<a id='cursorElm' style='color: white;'>|</a>"}else{return""}})()
writeIndex++
}
}
writeAnimation(writehere, "A New Way To Understand Mental Health")
