const kmElement = document.querySelector("#input-km");

const ageElement = document.querySelector("#input-age");

const startButtonElement = document.querySelector("#start");

console.log(startButtonElement)

let kmPrice = 0.21;

let discountedPrice = kmPrice;

startButtonElement.addEventListener("click",
    function () {
        if (!isNaN(ageElement) && 0 < ageElement && 100 > ageElement && Number.isInteger(ageElement) && Number.isInteger(kmElement) && !isNaN(kmElement) && kmElement > 0) {

            if (ageElement < 18) {
                let discount = 0.2;

                document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 20%";
                discountedPrice = kmElement * (1 - discount);


            } else if (ageElement > 64) {
                let discount = 0.4;

                document.getElementById('discount').innerHTML = "Hai ricevuto uno sconto del 40%";
                discountedPrice = kmElement * (1 - discount);
            }

            let totalCost = kmElement * discountedPrice;
            let lastPrice = totalCost.toFixed(2);

            document.getElementById('train-ticket').innerHTML = lastPrice + ' €';
            console.log("totalCost");

        }
    }
)