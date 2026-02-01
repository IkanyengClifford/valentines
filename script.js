const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionText = document.getElementById('question');
const subText = document.getElementById('sub-text');
const displayImg = document.getElementById('display-img');

let noCount = 0;

const noResponses = [
    "BABBBYY GIRLLL, Whats your nameee? 😩",
    "Is it cause I play too much Apex? I'll stop! (maybe)",
    "Kante??????🥺",
    "I'm going to assume you meant 'Yes' 🤔",
    "Okay, the 'No' button is now broken. You dont deserve it.😤"
];

const noImages = [
    "no_1.jpg", 
    "no_2.jpg", 
    "no_3.jpg", 
    "no_1.jpg", 
    "no_2.jpg"
];

noBtn.addEventListener('click', () => {
    if (noCount < noResponses.length) {
        questionText.innerText = noResponses[noCount];
        displayImg.src = noImages[noCount];

        questionText.classList.remove('highlight');
        void questionText.offsetWidth;
        questionText.classList.add('highlight');
        
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
    // 1. Hide buttons FIRST so they don't get stuck
    document.querySelector('.buttons').style.display = 'none';

    // 2. Update Text
    questionText.innerText = "Retla kopana ka di nkathi ❤️";
    subText.innerHTML = "Princess, you make every day feel like a win. <br> I appreciate you more than you know.";
    
    // 3. Force Image Change - Using the filename from your screenshot
    displayImg.src = "yes_nezuko.gif"; 

    // 4. Safety Check for Effects (Confetti/Hearts)
    try {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffffff']
        });
        createHearts();
    } catch (e) {
        console.log("Effects skipped, but that's okay!");
    }
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