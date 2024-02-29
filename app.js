const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  if(btnValue === "=" && output !== ""){
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = ""
  } else if (btnValue === "del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
}
// add event listener to buttons, call calculate() on click
buttons.forEach((button) => {
  button.addEventListener("click", e => calculate(e.target.dataset.value))
})

const correctPin= "2000";
const maxBalance = 15000;
let card = document.querySelector(".creditcard");
let starter = document.querySelector(".start");
let inputs = document.querySelector(".inputs");
let enter = document.querySelector(".enterer");
let options = document.querySelector(".options");
let balance = document.querySelector("#balance");
let cash = document.querySelector("#cash");
let makeCash = document.querySelector(".makecash");
let returnBtn = document.querySelector(".back")
let getMoney = document.querySelector(".getmoney");

card.addEventListener('click', function() {
if(starter.style.display === "flex") {
  starter.style.display = 'none';
  inputs.style.display = 'flex';
} else {starter.style.display = "flex";
}
})

enter.addEventListener('click', function(){
  if(document.querySelector(".pincode").value === correctPin){
    inputs.style.display = 'none';
    options.style.display = 'flex';
  }else{
    document.querySelector(".result").innerHTML = 
    "არასწორი PIN კოდი"
  }
})

balance.addEventListener('click', function(){
 document.querySelector(".ballanceh3").innerHTML = "თქვენი ბალანსია " + maxBalance + " ლარი";
})

cash.addEventListener('click', function(){
  if(options.style.display === 'flex'){
    options.style.display = 'none';
    makeCash.style.display = 'flex';
  }else{options.style.display = 'flex';}
})

getMoney.addEventListener('click', function(){
  if(document.querySelector(".money").value <= maxBalance){
    document.querySelector(".ballanceh4").innerHTML = "ტრანზაქცია წარმატებით შესრულდა";
    document.querySelector(".currentbalance").innerHTML = "მიმდინარე ბალანსი " + (maxBalance - document.querySelector(".money").value) + " ლარი";
    returnBtn.style.display = 'block';
  }else{
    document.querySelector(".ballanceh4").innerHTML = "ანგარიშზე არასაკმარისი თანხა";
    document.querySelector(".currentbalance").innerHTML = "მიმდინარე ბალანსი " + maxBalance + " ლარი";
  }
})

returnBtn.addEventListener('click', function(){
  if(starter.style.display === "none"){
    starter.style.display = 'flex';
    options.style.display = 'none';
    inputs.style.display = 'none';
    makeCash.style.display = 'none';
    returnBtn.style.display = 'none';
  }else{}
})