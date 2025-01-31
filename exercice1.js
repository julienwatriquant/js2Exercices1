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
  //  ring();
    
});

btn1.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "blue";
});

btn2.addEventListener("click" , () =>{
    reponse.classList.toggle("show-response")
    reponse.style.background = "pink";
});

//--------------------------------------------------------------------------------------------

// evenement mousemove
// nous allons créer un effet sur la souris une sorte de rond qui suivras les mouvements de la souris

const move = document.querySelector(".mousemove");
//console.log(move);
move.classList.add("mousemove2");
  // console.log(move);

//   move.addEventListener("click", () =>{
//     console.log("click !!!");
    
// });
   
   
window.addEventListener("mousemove", (e) =>{
    // console.log(e);
    move.style.left = e.pageX + "px";
    move.style.top = e.pageY + "px";
});

reponse.addEventListener("mouseover", () =>{
    reponse.style.transform = "rotate(2deg) important";
    
});

    
// maintenant le rond suit bien la souris a chaque mouvement
// mais il faudrait le centrer
// pour cela nous allons sur notre fichier css ajouter les modifications

const news = document.getElementById("new");
console.log(news);
news.classList.add("new1");
console.log(news);

news.addEventListener("click", () =>{
    news.style.background = "pink";
    
});








