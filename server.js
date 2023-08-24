const greetingElement = document.getElementById('greeting');
let currentLanguageIndex = 0;
const languages = ['en', 'fr', 'es', 'de']; // Add more language codes as needed

function updateGreeting() {
    const languageCode = languages[currentLanguageIndex];
    fetchTranslation(languageCode)
        .then(translation => {
            greetingElement.textContent = translation;
        })
        .catch(error => {
            console.error('Error fetching translation:', error);
        });
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
}

function fetchTranslation(languageCode) {
    // Replace this with a translation API call or use your own translation data
    const translations = {
        'en': 'Hello',
        'fr': 'Bonjour',
        'es': 'Hola',
        'de': 'Hallo'
        // Add more translations as needed
    };

    return new Promise((resolve, reject) => {
        if (translations[languageCode]) {
            resolve(translations[languageCode]);
        } else {
            reject('Translation not available');
        }
    });
}

// Start the animation loop
(function animate() {
    updateGreeting();
    setTimeout(animate, 4000); // Change greeting every 4 seconds
})();





const dotsContainer = document.querySelector('.dots');
const lineContainer = document.querySelector('.line-container');

// Function to add class when the line reaches the viewport
function animateOnScroll() {
    const boundingBox = lineContainer.getBoundingClientRect();
    if (boundingBox.bottom >= 0 && boundingBox.top <= window.innerHeight) {
        dotsContainer.classList.add('show-dots');
    } else {
        dotsContainer.classList.remove('show-dots');
    }
}

// Add scroll event listener to trigger the animation
window.addEventListener('scroll', animateOnScroll);
