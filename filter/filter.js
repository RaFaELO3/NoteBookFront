let btns = document.querySelectorAll(".btn")
let hiddens = document.querySelectorAll(".hidden")
console.log(hiddens);

btns.forEach((btn , btnIndex)=>{
    btn.addEventListener("click" , ()=>{
        hiddens.forEach((hidden , hiddenIndex)=>{
            if(btnIndex === hiddenIndex){
                hidden.classList.toggle("block")
            }
        })
    })
})



// klikOlunacaqElement.forEach(function (parametr){
//     parametr.addEventListener("click", function (plus){
//        plus.currentTarget.parentElement.nextElementSibling.classList.toggle("block");
//     })

   

// })