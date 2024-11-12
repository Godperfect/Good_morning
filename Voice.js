// ... (rest of your script.js) ...

const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance("Good morning my master wife Riya Magar. Well, here's the short message from my master. My master won't be active for 1 o'clock. But, sorry please take care and take your lunch in time.");

// Play the Jarvis sound
const jarvisSound = document.getElementById('jarvisSound');
jarvisSound.play(); 

// Speak the message
synth.speak(utterance);

// ... (rest of your script.js) ...