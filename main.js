const button = document.querySelector("#directory");
const directory = document.querySelector("#colorDirectory");

let buttonVision = false;

button.addEventListener("click", function() {
    if (!buttonVision) {
        document.getElementById("colorDirectory").style.opacity = 1;
        buttonVision = true;
    } else if (buttonVision) {
        document.getElementById("colorDirectory").style.opacity = 0;
        buttonVision = false;
    }
});



const purpleButt = document.querySelector(".purpleButton");
purpleButt.addEventListener("click", function(){

});