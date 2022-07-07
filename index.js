
let passChar = []
const genBtn = document.getElementById("gen-btn")
const passOne = document.getElementById("pass-1")
const passTwo = document.getElementById("pass-2")
const passThree = document.getElementById("pass-3")
const passFour = document.getElementById("pass-4")
let slider = document.getElementById("myRange")
let output = document.getElementById("demo")


//Slidebar to set passsword length 
 output.innerHTML = slider.value
 slider.oninput = function() {
 output.innerHTML = this.value
 }

//Function to randomly generate a password 
function randChar() {
  const passWord = []    
  let arrA = "abcdefghijklmnopqrstuvwxyz".split("") 
  const arrB = "1234567890".split("")
  const arrC = "!£$%^&*@!£$%^&*@".split("")
  const arrD = arrA.map( x => {
    return x.toUpperCase()
  })
  
  let passwordLength = slider.value

  for (let i = 0; i < passwordLength; i++) {
    
         const characters = arrA.concat(arrB, arrC, arrD)
         let rand = characters[Math.floor(Math.random() * characters.length)]
         passWord.push(rand)    
  }      
     return passWord.join("")                                   
  }
  
  
//Render passwords to DOM 
genBtn.addEventListener("click", () => { 

passOne.innerHTML = randChar()
passTwo.innerHTML = randChar()
passThree.innerHTML = randChar()
passFour.innerHTML = randChar()


} )
