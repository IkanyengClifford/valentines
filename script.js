const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionText = document.getElementById('question');
const subText = document.getElementById('sub-text');
const displayImg = document.getElementById('display-img');

let noCount = 0;

// 1. Text Responses
const noResponses = [
    "Really, Princess?",
    "Is it cause I play too much Apex? I'll stop! (maybe)",
    "Kante??????🥺",
    "I'm going to assume you meant 'Yes' 🤔",
    "Okay, the 'No' button is now broken. Try the other one!"
];

// 2. Image Responses (Your uploaded files)
const noImages = [
    "no_1.jpg", // Scared Tanjiro/Zenitsu
    "no_2.jpg", // Angry Inosuke
    "no_3.jpg", // Shocked Zenitsu
    "no_1.jpg", // Repeat Scared
    "no_2.jpg"  // Repeat Angry
];

noBtn.addEventListener('click', () => {
    if (noCount < noResponses.length) {
        // Change Text
        questionText.innerText = noResponses[noCount];
        
        // Change Image (Cycles through your specific files)
        displayImg.src = noImages[noCount];

        // Text Pop Animation
        questionText.classList.remove('highlight');
        void questionText.offsetWidth; // Trigger reflow
        questionText.classList.add('highlight');
        
        // Make Yes button grow
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 15) + "px";
        yesBtn.style.padding = (currentSize + 10) + "px " + (currentSize + 30) + "px";
        
        noCount++;
    }
    
    if (noCount === noResponses.length) {
        noBtn.style.display = 'none'; 
    }
});

yesBtn.addEventListener('click', () => {
    // Success Message
    questionText.innerText = "YAY! I'm the luckiest! ❤️";
    subText.innerHTML = "Princess, you make every day feel like a win. <br> I appreciate you more than you know.";
    
    // Change Image to Happy Dancing Nezuko
    displayImg.src = "yes_nezuko.gif";
    
    // Hide buttons
    document.querySelector('.buttons').style.display = 'none';

    // Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffffff']
    });

    // Floating Hearts
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerText = '❤️';
            heart.classList.add('floating-heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 200);
    }
}