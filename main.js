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
    window.open("https://www.google.com/search?q=purple+meaning&sca_esv=5ae9fa8a9abbd3fe&source=hp&ei=--C7Z_vADNuq0PEPn6X2wAI&iflsig=ACkRmUkAAAAAZ7vvC4DT_gNjv659G4Vm2UiNEFQO7r3S&ved=0ahUKEwi7qsTtqNuLAxVbFTQIHZ-SHSgQ4dUDCBo&uact=5&oq=purple+meaning&gs_lp=Egdnd3Mtd2l6Ig5wdXJwbGUgbWVhbmluZzINEAAYgAQYsQMYRhj5ATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj1ElCrCFinEnABeACQAQCYAWegAdgIqgEEMTIuMrgBA8gBAPgBAZgCD6ACiQmoAgrCAgoQABgDGOoCGI8BwgIKEC4YAxjqAhiPAcICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQY0QMYxwHCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAggQLhiABBixA8ICCxAuGIAEGMcBGK8BwgIOEC4YgAQYxwEYjgUYrwHCAg4QLhiABBixAxjHARivAcICBBAAGAOYAwjxBWiXKh-VmQb8kgcEMTMuMqAH3aQB&sclient=gws-wiz", '_blank');
});

const greenButt = document.querySelector(".greenButton");
greenButt.addEventListener("click", function(){
    window.open("https://www.google.com/search?q=green+meaning&sxsrf=ALeKk00vJ6q0K1Qs0w8v7QZ5U6H1ZJHs9w%3A1621961108846&ei=3wC7Z7K3K6zH0PEPz9qWwA8&ved=0ahUKEwj5z9X7qNuLAhXJQs0KHV6pBhQQ4dUDCBo&uact=5&oq=green+meaning&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQigUQQz", '_blank');
});

const redButt = document.querySelector(".redButton");
redButt.addEventListener("click", function(){
    window.open("https://www.google.com/search?q=red+meaning&sxsrf=ALeKk02g9yQ6J4zvQ1B0L6v6zS2nH7z7jw%3A1621961144079&ei=8AC7Z7G5I4eW0PEPqf2KwA8&ved=0ahUKEwiK0J6DqNuLAhXJQs0KHV6pBhQQ4dUDCBo&uact=5&oq=red+meaning&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQigUQQz", '_blank');
});

const yellowButt = document.querySelector(".yellowButton");
yellowButt.addEventListener("click", function(){
    window.open("https://www.google.com/search?q=yellow+meaning&sxsrf=ALeKk02g9yQ6J4zvQ1B0L6v6zS2nH7z7jw%3A1621961144079&ei=8AC7Z7G5I4eW0PEPqf2KwA8&ved=0ahUKEwiK0J6DqNuLAhXJQs0KHV6pBhQQ4dUDCBo&uact=5&oq=yellow+meaning&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQigUQQz", '_blank');
});

const blueButt = document.querySelector(".blueButton");
blueButt.addEventListener("click", function(){
    window.open("https://www.google.com/search?q=blue+meaning&sxsrf=ALeKk02g9yQ6J4zvQ1B0L6v6zS2nH7z7jw%3A1621961144079&ei=8AC7Z7G5I4eW0PEPqf2KwA8&ved=0ahUKEwiK0J6DqNuLAhXJQs0KHV6pBhQQ4dUDCBo&uact=5&oq=blue+meaning&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQigUQQz", '_blank');
});