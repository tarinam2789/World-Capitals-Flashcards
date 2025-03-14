import React, { useState } from 'react';
import './App.css';

const flashcards = [
  { question: 'What is the capital of Bangladesh?', answer: 'Dhaka' },
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the capital of Germany?', answer: 'Berlin' },
  { question: 'What is the capital of Japan?', answer: 'Tokyo' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Australia?', answer: 'Canberra' },
  { question: 'What is the capital of India?', answer: 'New Delhi' },
  { question: 'What is the capital of Brazil?', answer: 'Brasília' },
  { question: 'What is the capital of Russia?', answer: 'Moscow' },
  { question: 'What is the capital of Mexico?', answer: 'Mexico City' },
  { question: 'What is the capital of South Korea?', answer: 'Seoul' },
  { question: 'What is the capital of Italy?', answer: 'Rome' },
  { question: 'What is the capital of Spain?', answer: 'Madrid' },
  { question: 'What is the capital of United Kingdom?', answer: 'London' },
  { question: 'What is the capital of United States?', answer: 'Washington, D.C.' },
  { question: 'What is the capital of China?', answer: 'Beijing' },
  { question: 'What is the capital of Egypt?', answer: 'Cairo' },
  { question: 'What is the capital of Argentina?', answer: 'Buenos Aires' },
  { question: 'What is the capital of Sweden?', answer: 'Stockholm' },
  { question: 'What is the capital of South Africa?', answer: 'Pretoria' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Nigeria?', answer: 'Abuja' },
  { question: 'What is the capital of Saudi Arabia?', answer: 'Riyadh' },
  { question: 'What is the capital of Thailand?', answer: 'Bangkok' },
  { question: 'What is the capital of Indonesia?', answer: 'Jakarta' },
  { question: 'What is the capital of Turkey?', answer: 'Ankara' },
  { question: 'What is the capital of Kenya?', answer: 'Nairobi' },
  { question: 'What is the capital of Pakistan?', answer: 'Islamabad' },
  { question: 'What is the capital of Chile?', answer: 'Santiago' },
  { question: 'What is the capital of Peru?', answer: 'Lima' },
  { question: 'What is the capital of Poland?', answer: 'Warsaw' },
  { question: 'What is the capital of Greece?', answer: 'Athens' },
  { question: 'What is the capital of Norway?', answer: 'Oslo' },
  { question: 'What is the capital of Finland?', answer: 'Helsinki' },
  { question: 'What is the capital of Denmark?', answer: 'Copenhagen' },
  { question: 'What is the capital of Sweden?', answer: 'Stockholm' },
  { question: 'What is the capital of Switzerland?', answer: 'Bern' },
  { question: 'What is the capital of New Zealand?', answer: 'Wellington' },
  { question: 'What is the capital of Israel?', answer: 'Jerusalem' },
  { question: 'What is the capital of Malaysia?', answer: 'Kuala Lumpur' },
  { question: 'What is the capital of Singapore?', answer: 'Singapore' },
  { question: 'What is the capital of Vietnam?', answer: 'Hanoi' },
  { question: 'What is the capital of United Arab Emirates?', answer: 'Abu Dhabi' },
  { question: 'What is the capital of Iraq?', answer: 'Baghdad' },
  { question: 'What is the capital of Qatar?', answer: 'Doha' },
  { question: 'What is the capital of Kuwait?', answer: 'Kuwait City' },
  { question: 'What is the capital of Sri Lanka?', answer: 'Sri Jayawardenepura Kotte' },
  { question: 'What is the capital of Lebanon?', answer: 'Beirut' },
  { question: 'What is the capital of Jordan?', answer: 'Amman' },
  { question: 'What is the capital of Morocco?', answer: 'Rabat' },
  { question: 'What is the capital of Tunisia?', answer: 'Tunis' },
  { question: 'What is the capital of Algeria?', answer: 'Algiers' },
  { question: 'What is the capital of Kenya?', answer: 'Nairobi' },
  { question: 'What is the capital of Ethiopia?', answer: 'Addis Ababa' },
  { question: 'What is the capital of Zimbabwe?', answer: 'Harare' },
  { question: 'What is the capital of Uganda?', answer: 'Kampala' },
  { question: 'What is the capital of Madagascar?', answer: 'Antananarivo' },
  { question: 'What is the capital of Mozambique?', answer: 'Maputo' },
  { question: 'What is the capital of Angola?', answer: 'Luanda' }
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [shuffledCards, setShuffledCards] = useState(flashcards);

  const shuffleCards = () => {
    const shuffled = [...shuffledCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setShuffledCards(shuffled);
    setCurrentCardIndex(0); // Reset to the first card after shuffle
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
    setIsFlipped(false);
    setGuess('');
    setResultMessage('');
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + shuffledCards.length) % shuffledCards.length);
    setIsFlipped(false);
    setGuess('');
    setResultMessage('');
  };

  const handleSubmitGuess = () => {
    const correctAnswer = shuffledCards[currentCardIndex].answer.trim().toLowerCase();
    const userGuess = guess.trim().toLowerCase();

    if (!guess.trim()) {
      setResultMessage("Please enter your guess.");
    } else if (userGuess === correctAnswer) {
      setResultMessage("✅ Correct!");
    } else {
      setResultMessage("❌ Incorrect. Try again or flip to see the answer!");
    }
  };

  return (
    <div className="App">
      <h1>🌍 World Capitals Flashcards</h1>
      <p className="description">
        Test your geography skills and learn the capitals of countries from around the world. Flip the card to reveal the correct answer, and challenge yourself to guess them all!
      </p>
      <div className="card-count">Card {currentCardIndex + 1} of {shuffledCards.length}</div>

      <div className="flashcard-container" onClick={handleFlip}>
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
          <div className="front">{shuffledCards[currentCardIndex].question}</div>
          <div className="back">{shuffledCards[currentCardIndex].answer}</div>
        </div>
      </div>

      <div className="guess-section">
        <label htmlFor="guess">Guess the answer here:</label>
        <input
          type="text"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess..."
        />
        <button className="submit-button" onClick={handleSubmitGuess}>
          Submit
        </button>
        {resultMessage && (
          <p
            style={{
              marginTop: '10px',
              fontWeight: 'bold',
              color: resultMessage.includes('Correct') ? 'green' : resultMessage.includes('Incorrect') ? 'red' : 'orange',
            }}
          >
            {resultMessage}
          </p>
        )}
      </div>

      <div className="navigation-buttons">
        <button className="arrow-button" onClick={handlePrev}>⬅ Prev</button>
        <button className="arrow-button" onClick={handleNext}>Next ➡</button>
      </div>

      <div className="shuffle-button-container">
        <button className="submit-button shuffle-button" onClick={shuffleCards}>
          Shuffle Cards
        </button>
      </div>

      {/* Bubbles for background decoration */}
      <div className="bubble bubble-1" />
      <div className="bubble bubble-2" />
      <div className="bubble bubble-3" />
      <div className="bubble bubble-4" />
      <div className="bubble bubble-5" />
    </div>
  );
}

export default App;




