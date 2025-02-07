const messages = [
    "Sure ka?",
    "Luh seryoso??",
    "Ahh sige okay lang?",
    "Baby please...",
    "Pag isipan mo ng mabuti",
    "Ansakittt",
    "Nakakalungkot",
    "Di naman ako namimilit, okay lang",
    "Okay, di na ko magtatanong",
    "Joke lang, mag yes ka na please...❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}