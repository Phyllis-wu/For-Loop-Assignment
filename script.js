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
let numberlist= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 for (let i = 0; i < numberlist.length; i++) {
 console.log (numberlist[i]*5)
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

    for (let i=0; i<=5; i++)
    result.textContent += i 

}
updatingTextContent()


function checkOddNumber(){
  for (let i = 0; i <= 20; i++) {
    if (numberInput.value % 2 === 0) {
      console.log("This number is not odd");
    } else {
      console.log("This number is odd");
    }
  }
}

