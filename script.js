// Fake hack simulation
const hackMessage = document.getElementById('hack-message');
let hackProgress = 0;

const hackInterval = setInterval(() => {
  hackProgress += 10;
  hackMessage.textContent = `Stealing ${hackProgress}% of your data...`;
  
  // Once fake hack reaches 100%, switch to the real message
  if (hackProgress >= 100) {
    clearInterval(hackInterval);
    document.getElementById('hack-screen').style.display = 'none';
    document.getElementById('real-message').style.display = 'block';
  }
}, 1000);
