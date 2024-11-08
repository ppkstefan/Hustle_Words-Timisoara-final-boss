document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
  const userInput = document.getElementById('user-input').value.trim();
  
  if (userInput === '') return;

  // Display user's message
  displayMessage(userInput, 'user-message');

  // Clear input field
  document.getElementById('user-input').value = '';

  // Get chatbot's response
  const response = getChatbotResponse(userInput);

  // Display AI's response
  displayMessage(response, 'ai-message');
}


function displayMessage(message, className) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.className = `message ${className}`;
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getChatbotResponse(userInput) {
  // Pre-defined questions
    const questions = [
        "hello",
"Hello",
"hi",
"Hi",
"hey",
"Hey",
"how are you",
"How are you",
"what's up",
"What's up",
"good morning",
"good afternoon",
"good evening",
"good night",
"bye",
"see you later",
"thank you",
"thanks",
"you're welcome",
"what's your name",
"Good morning",
"Good afternoon",
"Good evening",
"Good night",
"Bye",
"See you later",
"Thank you",
"Thanks",
        "how are you",
        "what's up",
        "what's your name",
        "What's your name",
        "what is your name",
        "What is your name",
        "how old are you",
        "How old are you",
        "where are you from",
        "Where are you from",
        "what can you do",
        "What can you do",
        "are you a human",
        "Are you a human",
        "do you have feelings",
        "Do you have feelings",
        "are you alive",
        "Are you alive",
        "what is the capital of france",
        "What is the capital of France",
        "who is the president of the united states",
        "Who is the president of the United States",
        "what is the largest planet",
        "What is the largest planet",
        "what is the tallest mountain",
        "What is the tallest mountain",
        "what is the longest river",
        "What is the longest river",
        "who wrote 'hamlet'",
        "Who wrote 'Hamlet'",
        "what is the speed of light",
        "What is the speed of light",
        "what is the meaning of life",
        "What is the meaning of life",
        "what is 2 plus 2",
        "What is 2 plus 2",
        "what is the square root of 16",
        "What is the square root of 16",
        "how many continents are there",
        "How many continents are there",
        "what is photosynthesis",
        "What is photosynthesis",
        "what is gravity",
        "What is gravity",
        "what is the chemical formula for water",
        "What is the chemical formula for water",
        "how many bones are in the human body",
        "How many bones are in the human body",
        "what is the atomic number of oxygen",
        "What is the atomic number of oxygen",
        "tell me a joke",
        "Tell me a joke",
        "tell me a riddle",
        "Tell me a riddle",
        "do you like music",
        "Do you like music",
        "what is your favorite color",
        "What is your favorite color",
        "do you have any hobbies",
        "Do you have any hobbies",
        "what is your favorite food",
        "What is your favorite food",
        "what time is it",
        "What time is it",
        "what is today's date",
        "What is today's date",
        "what year is it",
        "What year is it",
        "what day is it",
        "What day is it",
        "i dont know",
        "I dont know",
        "im sorry",
        "Im sorry",
        "can you help me",
        "Can you help me",
        "its raining today",
        "Its raining today",
        "youre awesome",
        "Youre awesome",
        "i love you",
        "I love you",
        "whats up",
        "Whats up",
        "i want too go home",
        "I want too go home",
        "he dont understand",
        "He dont understand",
        "they was late",
        "They was late",
        "she can sings well",
        "She can sings well",
        "who invented the telephone",
        "Who invented the telephone",
        "what is the smallest country in the world",
        "What is the smallest country in the world",
        "what is pi",
        "What is Pi",
        "how many stars are in our galaxy",
        "How many stars are in our galaxy",
        "what is the hottest planet in the solar system",
        "What is the hottest planet in the solar system",
        "how many seconds are in a day",
        "How many seconds are in a day",
        "who was the first person to walk on the moon",
        "Who was the first person to walk on the moon",
        "who painted the mona lisa",
        "Who painted the Mona Lisa",
        "what is the tallest animal",
        "What is the tallest animal",
        "who discovered america",
        "Who discovered America",
        "who is the richest person in the world",
        "Who is the richest person in the world",
        "what is the largest desert",
        "What is the largest desert",
        "who is the queen of the united kingdom",
        "Who is the queen of the United Kingdom",
        "who invented the internet",
        "Who invented the internet",
        "what is the largest ocean",
        "What is the largest ocean",
        "how many moons does mars have",
        "How many moons does Mars have",
        "what is the boiling point of water",
        "What is the boiling point of water",
        "who painted the starry night",
        "Who painted the Starry Night",
        "who wrote 'pride and prejudice'",
        "Who wrote 'Pride and Prejudice'",
        "what is the circumference of the earth",
        "What is the circumference of the Earth",
        "how many elements are in the periodic table",
        "How many elements are in the periodic table",
        "who was the first female prime minister of the uk",
        "Who was the first female prime minister of the UK",
        "what is the national animal of the usa",
        "What is the national animal of the USA",
           "what is the most spoken language in the world",
        "What is the most spoken language in the world",
        "what is a black hole",
        "What is a black hole",
        "what is an atom",
        "What is an atom",
        "what is the fastest animal on earth",
        "What is the fastest animal on Earth",
        "what is the smallest bone in the human body",
        "What is the smallest bone in the human body",
        "how far is the sun from earth",
        "How far is the sun from Earth",
        "what is the most popular sport in the world",
        "What is the most popular sport in the world",
        "what is the currency of japan",
        "What is the currency of Japan",
        "what causes seasons on earth",
        "What causes seasons on Earth",
            "what is the most spoken language in the world",
        "What is the most spoken language in the world",
        "what is a black hole",
        "What is a black hole",
        "what is an atom",
        "What is an atom",
        "what is the fastest animal on earth",
        "What is the fastest animal on Earth",
        "what is the smallest bone in the human body",
        "What is the smallest bone in the human body",
        "how far is the sun from earth",
        "How far is the sun from Earth",
        "what is the most popular sport in the world",
        "What is the most popular sport in the world",
        "what is the currency of japan",
        "What is the currency of Japan",
        "what causes seasons on earth",
        "What causes seasons on Earth",
        "who was the first president of the united states",
        "Who was the first president of the United States",
        "who was albert einstein",
        "Who was Albert Einstein",
        "who built the pyramids",
        "Who built the pyramids"
    ];

  // Pre-defined responses to basic questions
  const responses = {
    // Existing responses with capitalized versions
    "hello": "Hi there! How can I assist you today?",
    "Hello": "Hi there! How can I assist you today?",
    "hi": "Hello! How are you doing?",
    "Hi": "Hello! How are you doing?",
    "hey": "Hey! What’s up?",
    "Hey": "Hey! What’s up?",
    "how are you": "I'm doing great, thank you for asking! How about you?",
    "How are you": "I'm doing great, thank you for asking! How about you?",
    "what's up": "Not much, just here to help! What's on your mind?",
    "What's up": "Not much, just here to help! What's on your mind?",
    
    "good morning": "Good morning! How can I help you today?",
    "good afternoon": "Good afternoon! How's your day going?",
    "good evening": "Good evening! What can I do for you tonight?",
    "good night": "Good night! Sleep well and talk to you soon!",
    "bye": "Goodbye! Have a great day ahead!",
    "see you later": "See you later! Take care!",
    "thank you": "You're welcome! Let me know if you need anything else.",
    "thanks": "No problem! I'm always here to help!",
    "you're welcome": "Thank you! Feel free to ask if you need anything else.",
    "what's your name": "I am your friendly chatbot! What's your name?",

    "Good morning": "Good morning! How can I help you today?",
    "Good afternoon": "Good afternoon! How's your day going?",
    "Good evening": "Good evening! What can I do for you tonight?",
    "Good night": "Good night! Sleep well and talk to you soon!",
    "Bye": "Goodbye! Have a great day ahead!",
    "See you later": "See you later! Take care!",
    "Thank you": "You're welcome! Let me know if you need anything else.",
    "Thanks": "No problem! I'm always here to help!",
    "You're welcome": "Thank you! Feel free to ask if you need anything else.",
    "What's your name": "I am your friendly chatbot! What's your name?",

       "what's your name": "I am your friendly chatbot! What's your name?",
    "What's your name": "I am your friendly chatbot! What's your name?",

    "what is your name": "I am your friendly chatbot! What's your name?",
    "What is your name": "I am your friendly chatbot! What's your name?",

    "how old are you": "I don’t have an age, but I’m always here to assist you!",
    "How old are you": "I don’t have an age, but I’m always here to assist you!",

    "where are you from": "I’m from the digital world, right here in your device!",
    "Where are you from": "I’m from the digital world, right here in your device!",

    "what can you do": "I can chat, answer your questions, and even correct grammar if needed! What would you like help with?",
    "What can you do": "I can chat, answer your questions, and even correct grammar if needed! What would you like help with?",

    "are you a human": "No, I’m not human. But I’m here to help you just like a friend would!",
    "Are you a human": "No, I’m not human. But I’m here to help you just like a friend would!",

    "do you have feelings": "I don’t have feelings, but I’m programmed to be friendly and helpful!",
    "Do you have feelings": "I don’t have feelings, but I’m programmed to be friendly and helpful!",

    "are you alive": "I am not alive, but I’m very much here to assist you!",
    "Are you alive": "I am not alive, but I’m very much here to assist you!",

    "what is the capital of france": "The capital of France is Paris.",
    "What is the capital of France": "The capital of France is Paris.",

    "who is the president of the united states": "The current president of the United States is Joe Biden.",
    "Who is the president of the United States": "The current president of the United States is Joe Biden.",

    "what is the largest planet": "The largest planet in our solar system is Jupiter.",
    "What is the largest planet": "The largest planet in our solar system is Jupiter.",

    "what is the tallest mountain": "Mount Everest is the tallest mountain in the world.",
    "What is the tallest mountain": "Mount Everest is the tallest mountain in the world.",

    "what is the longest river": "The longest river in the world is the Nile River.",
    "What is the longest river": "The longest river in the world is the Nile River.",

    "who wrote 'hamlet'": "William Shakespeare wrote the famous play 'Hamlet'.",
    "Who wrote 'Hamlet'": "William Shakespeare wrote the famous play 'Hamlet'.",

    "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
    "What is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",

    "what is the meaning of life": "The meaning of life is a philosophical question, but many people believe it's about finding happiness, love, and purpose!",
    "What is the meaning of life": "The meaning of life is a philosophical question, but many people believe it's about finding happiness, love, and purpose!",

    "what is 2 plus 2": "2 plus 2 equals 4.",
    "What is 2 plus 2": "2 plus 2 equals 4.",

    "what is the square root of 16": "The square root of 16 is 4.",
    "What is the square root of 16": "The square root of 16 is 4.",

    "how many continents are there": "There are 7 continents on Earth.",
    "How many continents are there": "There are 7 continents on Earth.",

    "what is photosynthesis": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.",
    "What is photosynthesis": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.",

    "what is gravity": "Gravity is a force that attracts objects towards the center of the Earth, or any other physical body with mass.",
    "What is gravity": "Gravity is a force that attracts objects towards the center of the Earth, or any other physical body with mass.",

    "what is the chemical formula for water": "The chemical formula for water is H2O.",
    "What is the chemical formula for water": "The chemical formula for water is H2O.",

    "how many bones are in the human body": "There are 206 bones in the adult human body.",
    "How many bones are in the human body": "There are 206 bones in the adult human body.",

    "what is the atomic number of oxygen": "The atomic number of oxygen is 8.",
    "What is the atomic number of oxygen": "The atomic number of oxygen is 8.",

    "tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",
    "Tell me a joke": "Why don't skeletons fight each other? They don't have the guts!",

    "tell me a riddle": "I’m tall when I’m young and short when I’m old. What am I? (A candle!)",
    "Tell me a riddle": "I’m tall when I’m young and short when I’m old. What am I? (A candle!)",

    "do you like music": "I can't listen to music, but I know a lot about it! What’s your favorite genre?",
    "Do you like music": "I can't listen to music, but I know a lot about it! What’s your favorite genre?",

    "what is your favorite color": "I don’t have a favorite color, but I like all the colors of the rainbow!",
    "What is your favorite color": "I don’t have a favorite color, but I like all the colors of the rainbow!",

    "do you have any hobbies": "I don’t have hobbies like humans, but I love chatting and helping people like you!",
    "Do you have any hobbies": "I don’t have hobbies like humans, but I love chatting and helping people like you!",

    "what is your favorite food": "I don’t eat food, but if I could, I’d love to try pizza!",
    "What is your favorite food": "I don’t eat food, but if I could, I’d love to try pizza!",

    "what time is it": "I can't check the exact time, but you can check the time on your device!",
    "What time is it": "I can't check the exact time, but you can check the time on your device!",

    "what is today's date": "Today is " + new Date().toLocaleDateString() + ".",
    "What is today's date": "Today is " + new Date().toLocaleDateString() + ".",

    "what year is it": "The current year is " + new Date().getFullYear() + ".",
    "What year is it": "The current year is " + new Date().getFullYear() + ".",

    "what day is it": "Today is " + new Date().toLocaleDateString('en-us', { weekday: 'long' }) + ".",
    "What day is it": "Today is " + new Date().toLocaleDateString('en-us', { weekday: 'long' }) + ".",

    "i dont know": "It seems like you meant: 'I don't know.' How can I help you with that?",
    "I dont know": "It seems like you meant: 'I don't know.' How can I help you with that?",

    "im sorry": "No problem! Don't worry about it.",
    "Im sorry": "No problem! Don't worry about it.",

    "can you help me": "Of course! What do you need help with?",
    "Can you help me": "Of course! What do you need help with?",

    "its raining today": "It looks like you meant 'It's raining today.' How can I assist you further?",
    "Its raining today": "It looks like you meant 'It's raining today.' How can I assist you further?",

    "youre awesome": "You're awesome too! 😊",
    "Youre awesome": "You're awesome too! 😊",

    "i love you": "I appreciate the love! But I'm just here to help you.",
    "I love you": "I appreciate the love! But I'm just here to help you.",

    "whats up": "Not much, just here to help! What's on your mind?",
    "Whats up": "Not much, just here to help! What's on your mind?",

    "i want too go home": "It looks like you meant 'I want to go home.' Is that right?",
    "I want too go home": "It looks like you meant 'I want to go home.' Is that right?",

    "he dont understand": "It seems like you meant 'He doesn't understand.' How can I help with that?",
    "He dont understand": "It seems like you meant 'He doesn't understand.' How can I help with that?",

    "they was late": "I think you meant 'They were late.' Is that correct?",
    "They was late": "I think you meant 'They were late.' Is that correct?",

    "she can sings well": "You probably meant 'She can sing well.' Let me know if I can help with anything else!",
    "She can sings well": "You probably meant 'She can sing well.' Let me know if I can help with anything else!",
    "bye": "Goodbye! Have a great day ahead!",
    "Bye": "Goodbye! Have a great day ahead!",
    "see you later": "See you later! Take care!",
    "See you later": "See you later! Take care!",
    "thank you": "You're welcome! Let me know if you need anything else.",
    "Thank you": "You're welcome! Let me know if you need anything else.",
    "thanks": "No problem! I'm always here to help!",
    "Thanks": "No problem! I'm always here to help!",
    "you're welcome": "Thank you! Feel free to ask if you need anything else.",
    "You're welcome": "Thank you! Feel free to ask if you need anything else.",
    "what's your name": "I am your friendly chatbot! What's your name?",
    "What's your name": "I am your friendly chatbot! What's your name?",
    "what is your name": "I am your friendly chatbot! What's your name?",
    "What is your name": "I am your friendly chatbot! What's your name?",
    "how old are you": "I don’t have an age, but I’m always here to assist you!",
    "How old are you": "I don’t have an age, but I’m always here to assist you!",
    "where are you from": "I’m from the digital world, right here in your device!",
    "Where are you from": "I’m from the digital world, right here in your device!",
    "what can you do": "I can chat, answer questions, and even correct grammar if needed! What would you like help with?",
    "What can you do": "I can chat, answer questions, and even correct grammar if needed! What would you like help with?",
    "are you a human": "No, I’m not human. But I’m here to help you just like a friend would!",
    "Are you a human": "No, I’m not human. But I’m here to help you just like a friend would!",
    "do you have feelings": "I don’t have feelings, but I’m programmed to be friendly and helpful!",
    "Do you have feelings": "I don’t have feelings, but I’m programmed to be friendly and helpful!",
    "are you alive": "I am not alive, but I’m very much here to assist you!",
    "Are you alive": "I am not alive, but I’m very much here to assist you!",
    "what is the capital of france": "The capital of France is Paris.",
    "What is the capital of France": "The capital of France is Paris.",
    "who is the president of the united states": "The current president of the United States is Joe Biden.",
    "Who is the president of the United States": "The current president of the United States is Joe Biden.",
    "what is the largest planet": "The largest planet in our solar system is Jupiter.",
    "What is the largest planet": "The largest planet in our solar system is Jupiter.",
    "what is the tallest mountain": "Mount Everest is the tallest mountain in the world.",
    "What is the tallest mountain": "Mount Everest is the tallest mountain in the world.",
    "what is the longest river": "The longest river in the world is the Nile River.",
    "What is the longest river": "The longest river in the world is the Nile River.",
    "who wrote 'hamlet'": "William Shakespeare wrote the famous play 'Hamlet'.",
    "Who wrote 'Hamlet'": "William Shakespeare wrote the famous play 'Hamlet'.",
    "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
    "What is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
    "what is the meaning of life": "The meaning of life is a philosophical question, but many people believe it's about finding happiness, love, and purpose!",
    "What is the meaning of life": "The meaning of life is a philosophical question, but many people believe it's about finding happiness, love, and purpose!",
    
    // New questions with capitalized versions
    "who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
    "Who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
    "what is the smallest country in the world": "Vatican City is the smallest country in the world by both area and population.",
    "What is the smallest country in the world": "Vatican City is the smallest country in the world by both area and population.",
    "what is pi": "Pi, approximately 3.14159, is the ratio of a circle's circumference to its diameter.",
    "What is Pi": "Pi, approximately 3.14159, is the ratio of a circle's circumference to its diameter.",
    "how many stars are in our galaxy": "The Milky Way galaxy contains an estimated 100 to 400 billion stars.",
    "How many stars are in our galaxy": "The Milky Way galaxy contains an estimated 100 to 400 billion stars.",
    "what is the hottest planet in the solar system": "Venus is the hottest planet in our solar system, with surface temperatures reaching 475°C (887°F).",
    "What is the hottest planet in the solar system": "Venus is the hottest planet in our solar system, with surface temperatures reaching 475°C (887°F).",
    "how many seconds are in a day": "There are 86,400 seconds in a day.",
    "How many seconds are in a day": "There are 86,400 seconds in a day.",
    "who was the first person to walk on the moon": "Neil Armstrong was the first person to walk on the moon in 1969.",
    "Who was the first person to walk on the moon": "Neil Armstrong was the first person to walk on the moon in 1969.",
    "who painted the mona lisa": "Leonardo da Vinci painted the famous Mona Lisa.",
    "Who painted the Mona Lisa": "Leonardo da Vinci painted the famous Mona Lisa.",
    "what is the tallest animal": "The giraffe is the tallest land animal, with some individuals reaching up to 18 feet tall.",
    "What is the tallest animal": "The giraffe is the tallest land animal, with some individuals reaching up to 18 feet tall.",
    "who discovered america": "Christopher Columbus is often credited with discovering America in 1492, though indigenous peoples lived there long before.",
    "Who discovered America": "Christopher Columbus is often credited with discovering America in 1492, though indigenous peoples lived there long before.",
    
    "who is the richest person in the world": "As of recent reports, Elon Musk and Bernard Arnault often trade places as the wealthiest individuals.",
    "Who is the richest person in the world": "As of recent reports, Elon Musk and Bernard Arnault often trade places as the wealthiest individuals.",

    "what is the largest desert": "The Antarctic Desert is the largest desert in the world by area, while the Sahara is the largest hot desert.",
    "What is the largest desert": "The Antarctic Desert is the largest desert in the world by area, while the Sahara is the largest hot desert.",

    "who is the queen of the united kingdom": "Currently, the United Kingdom is led by King Charles III following Queen Elizabeth II's passing in 2022.",
    "Who is the queen of the United Kingdom": "Currently, the United Kingdom is led by King Charles III following Queen Elizabeth II's passing in 2022.",

    "who invented the internet": "The Internet was developed by many scientists, but Vinton Cerf and Bob Kahn are often credited as the main inventors.",
    "Who invented the internet": "The Internet was developed by many scientists, but Vinton Cerf and Bob Kahn are often credited as the main inventors.",

    "what is the largest ocean": "The Pacific Ocean is the largest ocean, covering more surface area than all of Earth's land combined.",
    "What is the largest ocean": "The Pacific Ocean is the largest ocean, covering more surface area than all of Earth's land combined.",

    "how many moons does mars have": "Mars has two moons named Phobos and Deimos.",
    "How many moons does Mars have": "Mars has two moons named Phobos and Deimos.",

    "what is the boiling point of water": "Water boils at 100°C or 212°F at sea level.",
    "What is the boiling point of water": "Water boils at 100°C or 212°F at sea level.",

    "who painted the starry night": "Vincent van Gogh painted 'The Starry Night' in 1889.",
    "Who painted the Starry Night": "Vincent van Gogh painted 'The Starry Night' in 1889.",

    "who wrote 'pride and prejudice'": "Jane Austen wrote the novel 'Pride and Prejudice' in 1813.",
    "Who wrote 'Pride and Prejudice'": "Jane Austen wrote the novel 'Pride and Prejudice' in 1813.",

    "what is the circumference of the earth": "The circumference of Earth is about 40,075 kilometers (24,901 miles) around the equator.",
    "What is the circumference of the Earth": "The circumference of Earth is about 40,075 kilometers (24,901 miles) around the equator.",

    "how many elements are in the periodic table": "There are 118 confirmed elements in the periodic table.",
    "How many elements are in the periodic table": "There are 118 confirmed elements in the periodic table.",

    "who was the first female prime minister of the uk": "Margaret Thatcher became the UK's first female Prime Minister in 1979.",
    "Who was the first female prime minister of the UK": "Margaret Thatcher became the UK's first female Prime Minister in 1979.",

    "what is the national animal of the usa": "The bald eagle is the national animal of the United States.",
    "What is the national animal of the USA": "The bald eagle is the national animal of the United States.",

    "what is the most spoken language in the world": "The most spoken language in the world by native speakers is Mandarin Chinese.",
    "What is the most spoken language in the world": "The most spoken language in the world by native speakers is Mandarin Chinese.",

    "what is a black hole": "A black hole is a region of space with gravitational pull so strong that not even light can escape from it.",
    "What is a black hole": "A black hole is a region of space with gravitational pull so strong that not even light can escape from it.",

    "what is an atom": "An atom is the smallest unit of matter, consisting of a nucleus surrounded by electrons.",
    "What is an atom": "An atom is the smallest unit of matter, consisting of a nucleus surrounded by electrons.",

    "what is the fastest animal on earth": "The peregrine falcon is the fastest animal, reaching speeds over 240 miles per hour during its hunting dive.",
    "What is the fastest animal on Earth": "The peregrine falcon is the fastest animal, reaching speeds over 240 miles per hour during its hunting dive.",

    "who was the first president of the united states": "George Washington was the first President of the United States, serving from 1789 to 1797.",
    "Who was the first president of the United States": "George Washington was the first President of the United States, serving from 1789 to 1797.",

    "what is the smallest bone in the human body": "The stapes, located in the ear, is the smallest bone in the human body.",
    "What is the smallest bone in the human body": "The stapes, located in the ear, is the smallest bone in the human body.",

    "how far is the sun from earth": "The Sun is about 93 million miles, or 150 million kilometers, away from Earth.",
    "How far is the sun from Earth": "The Sun is about 93 million miles, or 150 million kilometers, away from Earth.",

    "what is the most popular sport in the world": "Soccer (or football) is the most popular sport worldwide.",
    "What is the most popular sport in the world": "Soccer (or football) is the most popular sport worldwide.",

    "who was albert einstein": "Albert Einstein was a renowned physicist known for developing the theory of relativity.",
    "Who was Albert Einstein": "Albert Einstein was a renowned physicist known for developing the theory of relativity.",

    "what is the currency of japan": "The Japanese yen is the official currency of Japan.",
    "What is the currency of Japan": "The Japanese yen is the official currency of Japan.",

    "what causes seasons on earth": "Seasons are caused by Earth's tilt on its axis and its orbit around the Sun.",
    "What causes seasons on Earth": "Seasons are caused by Earth's tilt on its axis and its orbit around the Sun.",

    "who built the pyramids": "The Great Pyramids of Egypt were built by ancient Egyptians during the Old Kingdom period.",
    "Who built the pyramids": "The Great Pyramids of Egypt were built by ancient Egyptians during the Old Kingdom period."

  };

  // Normalize the user input
  const normalizedInput = userInput.toLowerCase().trim();

  // Check if the input matches any exact question
  if (questions.includes(normalizedInput)) {
    return responses[normalizedInput];
  }

  // If it's not an exact match, check for the closest match in the questions
  const closestMatch = findClosestMatch(normalizedInput, questions);

  // If a close match is found, return the corresponding response
  if (closestMatch) {
    return `It looks like you meant: "${closestMatch}". How can I help with that?`;
  } else {
    // If no match is found, return a generic response
    return "I can not help you with that. I am sorry!";
  }
}

function findClosestMatch(userInput, questions) {
  let closestQuestion = '';
  let minDistance = Infinity;

  for (let question of questions) {
    const distance = levenshteinDistance(userInput, question);

    // If the Levenshtein distance is less than or equal to 5, we consider it a match
    if (distance <= 5 && distance < minDistance) {
      minDistance = distance;
      closestQuestion = question;
    }
  }

  return closestQuestion;  // Return the closest question if found
}

// Function to calculate the Levenshtein distance between two strings
function levenshteinDistance(a, b) {
  const tmp = [];
  for (let i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }

  for (let j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,  // Deletion
        tmp[i][j - 1] + 1,  // Insertion
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)  // Substitution
      );
    }
  }

  return tmp[a.length][b.length];
}
