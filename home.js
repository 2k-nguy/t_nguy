VANTA.NET({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fd5ff,
    backgroundColor: 0x3f
  })

// The text you want to type out
const name = 'Thienkim Nguyen';
const job = 'Actively seeking a job in tech';
const aboutMe = "About Me";
const contactMe = "Contact Me"

// The HTML elements you want to type the text into
const nameElement = document.getElementById('name');
const jobElement = document.getElementById('job');
const aboutMeElement = document.getElementById('about me')
const contactMeElement = document.getElementById('contact me')

// Function to type out text into an element
function typeText(text, element, delay = 100) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Type out the text when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('onload-sound');
    const muteButton = document.getElementById('mute-button');
    const muteIcon = muteButton.querySelector('i');

    // Check if 'muted' data exists in localStorage and apply it
    if (localStorage.getItem('muted') === 'true') {
        audio.muted = true;
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    } else {
        audio.play();
    }

    muteButton.addEventListener('click', function() {
        audio.muted = !audio.muted;
        // Store 'muted' data in localStorage
        localStorage.setItem('muted', audio.muted);
        if (audio.muted) {
            muteIcon.classList.remove('fa-volume-up');
            muteIcon.classList.add('fa-volume-mute');
        } else {
            muteIcon.classList.remove('fa-volume-mute');
            muteIcon.classList.add('fa-volume-up');
        }
    });
  typeText(name, nameElement);
    typeText(job, jobElement);
    typeText(aboutMe, aboutMeElement);
    typeText(contactMe, contactMeElement);
});
