let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []; // Load history from localStorage or initialize it

document.getElementById('searchButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value.trim();
    if (word) {
        fetchDefinitions(word);
        addToHistory(word); // Add to history
    } else {
        document.getElementById('definitions').innerText = 'Please enter a word.';
    }
});

// Add event listener to the input to trigger search on Enter key press
document.getElementById('wordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const word = this.value.trim();
        if (word) {
            fetchDefinitions(word);
            addToHistory(word); // Add to history
        } else {
            document.getElementById('definitions').innerText = 'Please enter a word.';
        }
    }
});

// Function to fetch definitions from the dictionary API
async function fetchDefinitions(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Word not found');
        }

        const data = await response.json();
        displayDefinitions(data);
    } catch (error) {
        document.getElementById('definitions').innerText = 'Error fetching definitions: ' + error.message;
        console.error('Fetch error:', error);
    }
}

// Function to display definitions and synonyms in the definitions section
function displayDefinitions(data) {
    const definitionsDiv = document.getElementById('definitions');
    definitionsDiv.innerHTML = ''; // Clear previous definitions

    data.forEach(entry => {
        const title = document.createElement('h2');
        title.classList.add('definition-title');
        title.innerText = entry.word;
        definitionsDiv.appendChild(title);
        
        entry.meanings.forEach(meaning => {
            const partOfSpeech = document.createElement('div');
            partOfSpeech.classList.add('part-of-speech');
            partOfSpeech.innerText = meaning.partOfSpeech.charAt(0).toUpperCase() + meaning.partOfSpeech.slice(1) + ':';
            definitionsDiv.appendChild(partOfSpeech);

            const ul = document.createElement('ul');
            meaning.definitions.forEach(def => {
                const li = document.createElement('li');
                li.innerHTML = emphasizeKeywords(def.definition); // Emphasize keywords in the definition
                ul.appendChild(li);
            });
            definitionsDiv.appendChild(ul);
            
            // Display synonyms if available
            if (meaning.synonyms && meaning.synonyms.length > 0) {
                const synonymsDiv = document.createElement('div');
                synonymsDiv.classList.add('synonyms');
                synonymsDiv.innerHTML = `<strong>Synonyms:</strong> ${meaning.synonyms.join(', ')}`;
                definitionsDiv.appendChild(synonymsDiv);
            }
        });
    });
}

// Function to emphasize certain keywords in the definition
function emphasizeKeywords(definition) {
    const keywords = ['meaning', 'definition', 'context', 'usage']; // List of keywords to emphasize
    let emphasizedDefinition = definition;

    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi'); // Case insensitive regex
        emphasizedDefinition = emphasizedDefinition.replace(regex, '<strong>$1</strong>');
    });

    return emphasizedDefinition.length > 100 ? emphasizedDefinition.slice(0, 97) + '...' : emphasizedDefinition;
}

// Function to add the searched word to the history
function addToHistory(word) {
    if (!searchHistory.includes(word)) { // Prevent duplicates
        searchHistory.push(word);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); // Save to localStorage
        updateHistoryList();
    }
}

// Function to update the history list display
function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear previous history

    searchHistory.forEach(word => {
        const li = document.createElement('li');
        li.innerText = word;
        li.addEventListener('click', () => {
            document.getElementById('wordInput').value = word; // Set the input value to the clicked word
            fetchDefinitions(word); // Fetch definitions for that word
        });
        historyList.appendChild(li);
    });
}

// Function to clear the search history
function clearHistory() {
    searchHistory = []; // Reset the search history array
    localStorage.removeItem('searchHistory'); // Clear from localStorage
    updateHistoryList(); // Update the display
}

// Add event listener to the clear history button
document.getElementById('clearHistoryButton').addEventListener('click', clearHistory);

// Load the search history when the page is loaded
document.addEventListener('DOMContentLoaded', updateHistoryList);