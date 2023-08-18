const hour = document.getElementById("hours");//Récupère l'élément avec l'ID "hours" pour afficher les heure
const min = document.getElementById("minutes");
const sec = document.getElementById("secondes");
const ampm = document.getElementById("ampm");
function clock(){
    let now = new Date(); //Crée un nouvel objet Date pour obtenir l'heure actuelle
    let h =now.getHours(); //Récupère les heures de l'objet Date
    let m =now.getMinutes();
    let s =now.getSeconds();
    let  ampm="AM";
    if( h > 12 ){
    h = h - 12;
    ampm = "PM";
    }
    h = h.toString().padStart(2, "0");//Convertit les heures en chaîne et ajoute un zéro devant si nécessaire
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");
    hour.innerText = h; //Met à jour le contenu textuel de l'élément "hours" avec les heures
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = ampm;
}
clock();// Appelle la fonction clock une première fois pour afficher l'heure actuelle
setInterval(clock, 1000); /*y3yet lel fonction koul seconda */