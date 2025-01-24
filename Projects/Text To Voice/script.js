const textInput = document.getElementById('textarea-input');
const audio = document.getElementById('listen');
const selectVoice = document.getElementById('voice-select');

let voices = [];  //thos will contains all the available voices

function selectVoices() {
    voices = window.speechSynthesis.getVoices();  //get all voices

    if (voices.length === 0) {
        console.warn("No voices available yet.");
        return;
    }

    selectVoice.innerHTML = ''; //clear previous options

    //add dropdown of voices

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += ' [Default]';
        }
        selectVoice.appendChild(option);
    });
}
// Load voices when available
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = selectVoices;
    selectVoices();
} else {
    alert('Sorry, your browser does not support text-to-speech!');
}

audio.addEventListener('click', () => {
    const text = textInput.value.trim();
    const selectedVoiceIndex = selectVoice.value;

    if (!text) {
        alert('Please enter some text!');
        return;
    }
    if (selectedVoiceIndex === '') {
        alert('Please select voice');
        return;
    }
    const speech = new SpeechSynthesisUtterance(text);

    // Set the selected voice
    speech.voice = voices[selectedVoiceIndex];
    speech.lang = voices[selectedVoiceIndex].lang; // Language
    speech.pitch = 1;      // Pitch (0 to 2)
    speech.rate = 1;       // Rate of speech (0.1 to 10)

    // Speak the text
    window.speechSynthesis.speak(speech);
})