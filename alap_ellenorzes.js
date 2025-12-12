// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/
let nevKiiratasa = document.getElementById("nevEredmeny");
function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);

    // ha üres illetve csak szóközöket tartalmaz
    if(nev.trim() === ""){
        // alert("A név mező nem lehet üres!");
        if(nevKiiratasa){
            nevKiiratasa.innerText = "A név mező nem lehet üres!";
            nevKiiratasa.classList.add("hiba");
        }
        return false;
    }

    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
    if(!nevfilter.test(nev)){
        // alert("A név mező csak betűket és szóközöket tartalmazhat!");
        nevKiiratasa.innerText = "A név mező csak betűket és szóközöket tartalmazhat!";
        nevKiiratasa.classList.add("hiba");
        return false;
    }

    
    nevKiiratasa.innerText = "Helyes név: " + nev;
    nevKiiratasa.classList.remove("hiba");
    return false;

}