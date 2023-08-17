let numberInput = document.getElementById("number");
let inputBtn = document.getElementById("btn")
let result = document.getElementById("result");
let textInput = document.getElementById("text");


function check(){
if (numberInput.value  % 3 === 0) {
    result.textContent = "Fizz";
}else {
    result.textContent = "Not Fizz";
}
}


function loopingArray(){
 for (let i = 0; i < numberInput.length; i++) {

  let (numberInput* 5) = array[index]
   console.log(array[index])
  
}
}
loopingArray()


function wordcheck(){
let wordsArray = ["cat","window","bottle","car","JavaScript"]
for (let i=0; i<wordsArray.length; i++){

    if (wordsArray.length>4){
    console.log("Long Word Alert!")
    }
    else{
    console.log("Short Words")
}
}
}


function updatingTextContent(){

    for (let i=0; i<6; i++)
    result.textContent += i 

}
updatingTextContent()





