// 1 créer un code en js qui permet de faire changer de couleur la div avec un click.
// 2 créer un code en js qui permet avec les boutons  de faire apparaitre avec un click la réponse ainsi qu'une couleur






const html = document.querySelector("h4");
// console.log(html);

const questionContainer = document.querySelector(".click-event");
//console.log(questionContainer);

const btn1 = document.getElementById('btn1');
console.log(btn1);

const btn2 = document.getElementById('btn2');
console.log(btn2);

const reponse = document.querySelector("p");

questionContainer.style.borderRadius = "150px";
console.log(questionContainer);



questionContainer.addEventListener("click" , () =>{

    questionContainer.classList.toggle("questionClick");
    
    
});

btn1.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "blue";
});

btn2.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "pink";
});