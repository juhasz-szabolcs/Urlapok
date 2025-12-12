function telefonError(strng) {
    error = "";
    let newstrng = strng.replace( /[\(\)\.\-\ ]/g ,'' );
    let filter = /^\d+$/;
    if(!filter.test(newstrng)) {
    error = "Kérem adjon meg érvényes telefonszámot!\n";
    }
    return error;
}

function ellenor() {
let telefon = document.forms["urlap"]["tel"].value;
let email = document.forms["urlap"]["mail"].value;

let telError = telefonError(telefon);
if (telError) {
    alert(telError);
    return false;
} else {
    let telEredmeny = document.getElementById("telEredmeny");
    telEredmeny.innerText = "A megadott telefonszám érvényes." + telefon;
    return false;
}
}