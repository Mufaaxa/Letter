const messages = {
    id: [
        "Melia, dalam dunia yang sering kali terasa berat, aku ingin kamu tahu bahwa kamu tidak sendiri.",
        "Kamu lebih kuat dari yang kamu sadari, lebih berharga dari yang kamu bayangkan.",
        "Aku tahu beban yang kamu pikul terasa besar, tapi ingatlah bahwa bahkan langit paling gelap pun akan menemukan cahaya.",
        "Jangan biarkan kesedihan atau kelelahan meredupkan cahaya dalam dirimu.",
        "Aku percaya padamu, Melia. Kamu pantas mendapatkan kebahagiaan dan ketenangan.",
        "Dan ingatlah, aku akan selalu ada untukmu. Tidak peduli seberapa berat langkahmu, kamu tidak perlu melaluinya sendirian." 
    ],
    en: [
        "Melia, in a world that often feels heavy, I want you to know that you are not alone.",
        "You are stronger than you realize, more valuable than you imagine.",
        "I know the weight you carry feels overwhelming, but remember that even the darkest sky will find its light.",
        "Do not let sadness or exhaustion dim the light within you.",
        "I believe in you, Melia. You deserve happiness and peace.",
        "And remember, I will always be here for you. No matter how hard the journey gets, you don’t have to go through it alone."
    ]
};

let index = 0;
let selectedLanguage = "id";
const messageElement = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const langSelection = document.getElementById("language-selection");

function startLetter(lang) {
    selectedLanguage = lang;
    langSelection.style.display = "none";
    typeMessage(messages[selectedLanguage][index]);
}

function typeMessage(text) {
    let i = 0;
    messageElement.innerHTML = "";
    nextBtn.style.display = "none";
    function type() {
        if (i < text.length) {
            messageElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            nextBtn.style.display = "block";
        }
    }
    type();
}

function nextMessage() {
    index++;
    if (index < messages[selectedLanguage].length) {
        typeMessage(messages[selectedLanguage][index]);
    } else {
        messageElement.innerHTML = selectedLanguage === "id" ? 
            "Terima kasih telah membaca ini, semoga hatimu lebih ringan. 💛" : 
            "Thank you for reading this, I hope your heart feels lighter. 💛";
        nextBtn.style.display = "none";
    }
}
