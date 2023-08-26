// const greetingElement = document.getElementById('greeting');
// let currentLanguageIndex = 0;
// const languages = ['en', 'fr', 'es', 'de']; // Add more language codes as needed

// function updateGreeting() {
//     const languageCode = languages[currentLanguageIndex];
//     fetchTranslation(languageCode)
//         .then(translation => {
//             greetingElement.textContent = translation;
//         })
//         .catch(error => {
//             console.error('Error fetching translation:', error);
//         });
//     currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
// }

// function fetchTranslation(languageCode) {
//     // Replace this with a translation API call or use your own translation data
//     const translations = {
//         'en': 'Hello.',
//         'fr': 'Bonjour.',
//         'es': 'Hola.',
//         'de': 'Hallo.'
//         // Add more translations as needed
//     };

//     return new Promise((resolve, reject) => {
//         if (translations[languageCode]) {
//             resolve(translations[languageCode]);
//         } else {
//             reject('Translation not available');
//         }
//     });
// }

// // Start the animation loop
// (function animate() {
//     updateGreeting();
//     setTimeout(animate, 4300); // Change greeting every 4 seconds
// })();



