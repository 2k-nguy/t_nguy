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

// Select the audio element
const audio = document.getElementById('onload-sound');

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
window.onload = () => {
    audio.play();
    typeText(name, nameElement);
    typeText(job, jobElement);
    typeText(aboutMe, aboutMeElement);
    typeText(contactMe, contactMeElement)
};