const kmElement = document.querySelector("#input-km");
const ageElement = document.querySelector("#input-age");
const nameElement = document.querySelector("#inputName");
const startButtonElement = document.querySelector("#start");


let km;
let age;
let userName;

let kmPrice = 0.21;

let discountedPrice = kmPrice;


startButtonElement.addEventListener("click",
    function () {

        age = ageElement.value;
        km = kmElement.value;
        userName = nameElement.value;

        let errorHappened = false;

        //km error
        if (km < 1 || km == 0) {
            document.querySelector("#km-error").innerHTML = "Valore errato, inserire un valore valido";

            errorHappened = true;
        } else {
            document.querySelector("#km-error").innerHTML = "";
        }

        //username error
        if (!isNaN(userName) || userName === "") {
            document.querySelector("#nameError").innerHTML = "Valore errato, inserire un valore valido";

            errorHappened = true;
        } else {
            document.querySelector("#nameError").innerHTML = "";
        }

        //age error
        if (age <= 0 || age > 105) {
            document.querySelector("#age-error").innerHTML = "Valore errato, inserire un valore valido";

            errorHappened = true;
        } else {
            document.querySelector("#age-error").innerHTML = "";
        }





        //start discounts
        if (age < 18) {
            let discount = 0.2;

            document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 20%";
            discountedPrice = kmPrice * (1 - discount);

        } else if (age > 64) {
            let discount = 0.4;

            document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 40%";
            discountedPrice = kmPrice * (1 - discount);

        } else {
            document.getElementById('discount').innerHTML = "";
            discountedPrice = kmPrice;
        }

        let totalCost = km * discountedPrice;
        let lastPrice = totalCost.toFixed(2);

        document.getElementById('train-ticket').innerHTML = lastPrice + ' €';
        console.log("totalCost");
    }
)

//if everything is well done
if (!errorHappened) {
    document.getElementById("train-ticket").innerHTML = "Il prezzo del tuo biglietto è di € " + finalPrice.toFixed(2) + "<br>" + discountMessage;
}