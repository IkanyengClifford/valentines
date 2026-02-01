const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionText = document.getElementById('question');
const subText = document.getElementById('sub-text');
const displayImg = document.getElementById('display-img');

let noCount = 0;

const noResponses = [
    "Really, Princess?",
    "Is it cause I play too much Apex?, Ill stop(maybe)",
    "Kante??????🥺",
    "I'm going to assume you meant 'Yes' 🤔",
    "Okay, the 'No' button is now broken, you dont deserve it, Try the other one"
];

noBtn.addEventListener('click', () => {
    if (noCount < noResponses.length) {
        // Change the text to the next funny prompt
        questionText.innerText = noResponses[noCount];
        
        // Make the "Yes" button grow bigger each time she says "No"
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 10) + "px";
        yesBtn.style.padding = (currentSize + 5) + "px " + (currentSize + 20) + "px";
        
        noCount++;
    }
    
    if (noCount === noResponses.length) {
        noBtn.style.display = 'none'; // Hide "No" after 4-5 attempts
    }
});

yesBtn.addEventListener('click', () => {
    questionText.innerText = "YAY! I'm the luckiest! ❤️";
    subText.innerHTML = "Princess, you make every day feel like a win. <br> I appreciate you more than you know!";
    displayImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueGZ3bmZqZzR6eXp3Ymd6ZzR6eXp3Ymd6ZzR6eXp3Ymd6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/vAas6vNfX6XEg/giphy.gif";
    
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';

    // Heart Confetti Effect
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
});g