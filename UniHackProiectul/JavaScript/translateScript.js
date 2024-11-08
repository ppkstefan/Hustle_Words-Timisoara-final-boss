document.getElementById('textInput').addEventListener('input', function () {
    const text = this.value.trim();
    const sourceLang = document.getElementById('sourceLanguage').value;
    const targetLang = document.getElementById('targetLanguage').value;

    if (text) {
        // Call the function to translate the text
        translateText(text, sourceLang, targetLang);
    } else {
        document.getElementById('translationResult').innerText = ''; // Clear result when input is empty
    }
});

// Simulate Google Translate function
async function translateText(text, source, target) {
    // Use a dummy URL here for educational purposes. In a real application, use a proper API.
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const result = await response.json();
        displayTranslation(result.responseData.translatedText);
    } catch (error) {
        document.getElementById('translationResult').innerText = 'Error fetching translation: ' + error.message;
        console.error('Fetch error:', error);
    }
}

// Function to display the translation result
function displayTranslation(translation) {
    const translationDiv = document.getElementById('translationResult');
    translationDiv.innerHTML = `<strong>Translation:</strong> ${translation}`;
}