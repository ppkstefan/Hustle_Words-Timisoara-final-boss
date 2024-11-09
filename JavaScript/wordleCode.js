const Synonyms = {
    book: ["Novel", "Tome", "Volume", "Manuscript"],
    chair: ["Seat", "Armchair", "Recliner", "Throne"],
    table: ["Desk", "Dining table", "Counter", "Board"],
    car: ["Automobile", "Vehicle", "Auto", "Motorcar"],
    pen: ["Writing instrument", "Ballpoint", "Fountain pen", "Quill"],
    computer: ["PC", "Laptop", "Desktop", "Machine"],
    phone: ["Mobile", "Smartphone", "Cellphone", "Handset"],
    
  };

  const dictionary = {
    book: "A set of written or printed pages, usually bound with a protective cover.",
        chair: "A separate seat for one person, typically with a back and four legs.",
        table: "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working.",
        car: "A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people.",
        pen: "An instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder.",
        computer: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        phone: "a device by which sound (such as speech) is converted into electrical impulses and transmitted (as by wire or radio waves) to one or more specific receivers.",
       
  };


  const letterSets = [
    ["C", "V", "A", "I", "R", "H", "P", "E", "T"],
        ["S", "B", "I", "D", "I", "R", "N", "A", "E", "P"],
        ["P", "E", "B", "G", "R", "I", "N", "N", "U", "D"],
        ["W", "M", "A", "N", "T", "D", "T", "E", "R"],
        ["M", "U", "D", "C", "S", "N", "I"],
        ["E", "S", "R", "H", "Z", "A", "T", "B", "O"],
        ["F", "H", "C", "I", "D", "O", "E", "H", "L", "O", "D"],
        ["M", "L", "V", "O", "N", "E", "O", "C", "A"],
        ["O", "B", "G", "D", "O", "R", "E", "A", "M"],
  ];

  let currentSetIndex = 0;

  function getRandomSet() {
    return letterSets[currentSetIndex];
  }

  function addLetterButtons() {
    const letterButtonsContainer = document.getElementById("letter-buttons-container");
    letterButtonsContainer.innerHTML = "";

    const randomLetters = getRandomSet();

    randomLetters.forEach((letter) => {
      const button = document.createElement("button");
      button.textContent = letter;
      button.addEventListener("click", () => addToWord(letter));
      letterButtonsContainer.appendChild(button);
    });
  }

  function addToWord(letter) {
    const searchBox = document.getElementById("search-box");
    searchBox.value += letter;
  }

  function clearSearchBox() {
    const searchBox = document.getElementById("search-box");
    searchBox.value = "";
  }
  function clearSearchBox() {
    document.getElementById("search-box").value = "";
    document.getElementById("definition").innerText = "";
    document.getElementById("result-message").innerText = "";
    document.getElementById("result-message").classList.remove("incorrect");
    document.getElementById("synonyms").innerText = ""; // Added line to clear synonyms
}

  function displayResultMessage(isCorrect) {
    const resultMessage = document.getElementById("result-message");
    resultMessage.textContent = isCorrect ? "Correct!" : "Incorrect!";
    resultMessage.className = isCorrect ? "" : "incorrect";
  }

  function displayDefinition(word) {
    const definitionDiv = document.getElementById("definition");
    const synonymsDiv = document.getElementById("synonyms");

    const definition = dictionary[word];
    const synonyms = getSynonyms(word);

    definitionDiv.textContent = `Definition: ${definition}`;

    if (synonyms.length > 0) {
      synonymsDiv.textContent = `Synonyms: ${synonyms.join(", ")}`;
    } else {
      synonymsDiv.textContent = "";
    }
  }

  function getSynonyms(word) {
    return Synonyms[word.toLowerCase()] || [];
  }

  function checkWord() {
    const enteredWord = document.getElementById("search-box").value.toLowerCase();

    if (enteredWord in dictionary) {
      displayResultMessage(true);
    } else {
      displayResultMessage(false);
    }

    displayDefinition(enteredWord);
  }

  function nextSet() {
    currentSetIndex = (currentSetIndex + 1) % letterSets.length;
    clearSearchBox();
    document.getElementById("result-message").textContent = "";
    document.getElementById("result-message").className = "";
    document.getElementById("definition").textContent = "";
    addLetterButtons();
  }

  // Initial setup
  addLetterButtons();