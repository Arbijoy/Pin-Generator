document.getElementById("generate-btn").addEventListener("click", function(){
    const randomNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const show_randomNumber = document.getElementById("random-number").value;
    document.getElementById("random-number").value = randomNumber; 
    console.log(show_randomNumber)
   
})
document.getElementById("clearAll").addEventListener("click",function(){
    const screenBtn = document.getElementById("screen-btn").value;
    let value = eval(screenBtn.value);
    document.getElementById("screen-btn").value = "";
})
document.getElementById("clearBack").addEventListener("click",function(){
    const screenBtn = document.getElementById("screen-btn").value;
    const newScreen = screenBtn.slice(0, screenBtn.length-1);
    document.getElementById("screen-btn").value = newScreen;
})
const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear")
const clearAllBtn = document.querySelector(".clear-all");

for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click",function(){
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
    })
}

document.getElementById("submitBtn").addEventListener("click",function(){
   const screenBtn = document.getElementById("screen-btn").value;
   const show_randomNumber = document.getElementById("random-number").value;
   const rightNotify = document.getElementById("right-notify");
   const wrongNotify = document.getElementById("wrong-notify");
   
   
   if (show_randomNumber == screenBtn) {
    rightNotify.style.display = "block";
    
   }
   else{
    wrongNotify.style.display = "block";
   }
   
})