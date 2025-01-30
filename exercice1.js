// 1 créer un code en js qui permet de faire changer de couleur la div avec un click.
// 2 créer un code en js qui permet avec les boutons  de faire apparaitre avec un click la réponse ainsi qu'une couleur
// faire en sorte que quand nous clickons sur la div cela déclenche le son de la sonnette





const html = document.querySelector("h4");
// console.log(html);

const questionContainer = document.querySelector(".click-event");
//console.log(questionContainer);

const btn1 = document.getElementById('btn1');
console.log(btn1);

const btn2 = document.getElementById('btn2');
console.log(btn2);

const reponse = document.querySelector("p");

// création d'une constante avec une fonction audio
const ring = () =>{
    const audio = new Audio;
    audio.src = "./sonnette1.mp3";
    audio.play();
}

questionContainer.style.borderRadius = "150px";
console.log(questionContainer);



questionContainer.addEventListener("click" , () =>{

    questionContainer.classList.toggle("questionClick");
    // execution de la fonction
    ring();
    
});

btn1.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "blue";
});

btn2.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "pink";
});