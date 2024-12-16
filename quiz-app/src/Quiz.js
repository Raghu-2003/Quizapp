
import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O"
  },
  
    {
        
        
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
      },
      {
        
       
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
      },
      {
       
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
      },
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1944", "1950"],
        answer: "1945"
      },
      {
        question: "'Pride and Prejudice' was written by which author?",
        options: ["Charlotte Brontë", "Emily Dickinson", "Jane Austen", "Virginia Woolf"],
        answer: "Jane Austen"
      },
      {
        question: "'1984' is a novel by which author?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
        answer: "George Orwell"
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
      },
      {
        question: "'The Great Gatsby' was written by which author?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
        answer: "'F. Scott Fitzgerald'"
      },
      {
        question: "'To Kill a Mockingbird' is set in which U.S. state?",
        options: ["Alabama", "Mississippi", "Georgia", "South Carolina"],
        answer: "'Alabama'"
      },
      {
        question: "'Moby Dick' was written by which author?",
        options: ["Herman Melville", "Jules Verne",  "Charles Dickens",  "Leo Tolstoy"],
        answer: "'Herman Melville'"
      },
      {
        question: "What is the smallest prime number?",
        options: ["0","1","2","3"],
        answer: "2"
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Helium","Hydrogen","Oxygen","Carbon"],
        answer: "Hydrogen"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold","Iron","Diamond","Platinum"],
        answer: "Diamond"
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo","Seoul","Beijing","Bangkok"],
        answer: "Tokyo"
      },
      {
        question: "Which planet is known for its rings?",
        options: ["Earth","Mars","Saturn","Jupiter"],
        answer: "Saturn"
      },
      {
         question:"What is the most widely spoken language in the world?",
         options:["English","Mandarin Chinese","Spanish","Hindi"],
         answer:"Mandarin Chinese"
       },
       {
         question:"Who painted the Mona Lisa?",
         options:["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Claude Monet"],
         answer:"Leonardo da Vinci"
       },
       {
         question:"What year did man first land on the moon?",
         options:["1965","1969","1971","1975"],
         answer:"1969"
       },
       {
         question:"What is the capital of Australia?",
         options:["Canberra","Sydney","Melbourne","Brisbane"],
         answer:"Canberra"
       },
       {
         question:"Which instrument measures atmospheric pressure?",
         options:["Thermometer","Barometer","Hygrometer","Anemometer"],
         answer:"Barometer"
       },
       {
         question:"What is the largest ocean on Earth?",
         options:["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
         answer:"Pacific Ocean"
       },
       {
         question:"Which country is known as the Land of the Rising Sun?",
         options:["China","Japan","Thailand","South Korea"],
         answer:"Japan"
       },
       {
         question:"Who discovered penicillin?",
         options:["Marie Curie","Alexander Fleming","Louis Pasteur","Isaac Newton"],
         answer:"Alexander Fleming"
       },
       {
         question:"What is the longest river in the world?",
         options:["Amazon River","Nile River","Yangtze River","Mississippi River"],
         answer:"Nile River"
       },
       {
         question:"Which planet is closest to the sun?",
         options:["Mercury","Venus","Earth","Mars"],
         answer:"Mercury"
       },
       {
         question:"What is the main ingredient in guacamole?",
         options:["Tomato","Avocado","Pepper","Onion"],
         answer:"Avocado"
       },
       {
         question:"In what year did World War I begin?",
         options:["1912","1914","1916","1918"],
         answer:"1914"
       },
       {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
      },
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1944", "1950"],
        answer: "1945"
      },
      {
        question: "'Pride and Prejudice' was written by which author?",
        options: ["Charlotte Brontë", "Emily Dickinson", "Jane Austen", "Virginia Woolf"],
        answer: "Jane Austen"
      },
      {
        question: "'1984' is a novel by which author?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
        answer: "George Orwell"
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
      },
      {
        question: "'The Great Gatsby' was written by which author?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
        answer: "F. Scott Fitzgerald"
      },
      {
        question: "'To Kill a Mockingbird' is set in which U.S. state?",
        options: ["Alabama", "Mississippi", "Georgia", "South Carolina"],
        answer: "Alabama"
      },
      {
        question: "'Moby Dick' was written by which author?",
        options: ["Herman Melville", "Jules Verne",  "Charles Dickens",  "Leo Tolstoy"],
        answer: "Herman Melville"
      },
      {
        question: "What is the smallest prime number?",
        options: ["0","1","2","3"],
        answer: "2"
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Helium","Hydrogen","Oxygen","Carbon"],
        answer: "Hydrogen"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold","Iron","Diamond","Platinum"],
        answer: "Diamond"
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo","Seoul","Beijing","Bangkok"],
        answer: "Tokyo"
      },
      {
        question: "Which planet is known for its rings?",
        options: ["Earth","Mars","Saturn","Jupiter"],
        answer: "Saturn"
      },
      {
        question: "What is the most widely spoken language in the world?",
        options: ["English","Mandarin Chinese","Spanish","Hindi"],
        answer: "Mandarin Chinese"
      },
      {
          question:"Who painted the Mona Lisa?",
          options:["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Claude Monet"],
          answer:"Leonardo da Vinci"
       },
       {
          question:"What is the largest ocean on Earth?",
          options:["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
          answer:"Pacific Ocean"
       },
       {
          question:"Which country is known as the Land of the Rising Sun?",
          options:["China","Japan","Thailand","South Korea"],
          answer:"Japan"
       },
       {
          question:"Who discovered penicillin?",
          options:["Marie Curie","Alexander Fleming","Louis Pasteur","Isaac Newton"],
          answer:"Alexander Fleming"
       },
       {
          question:"What is the main ingredient in guacamole?",
          options:["Tomato","Avocado","Onion","Pepper"],
          answer:"Avocado"
       },
       {
          question:"How many continents are there on Earth?",
          options:["5","6","7","8"],
          answer:"7"
       },
       {
          question:"Who was known as the Iron Lady?",
          options:["Margaret Thatcher","Angela Merkel","Indira Gandhi","Golda Meir"],
          answer:"Margaret Thatcher"
       },
       {
          question:"In which year did man first land on the moon?",
          options:["1965","1969","1971","1975"],
          answer:"1969"
       },
       {
          question:"What is the capital city of Canada?",
          options:["Toronto","Ottawa","Vancouver","Montreal"],
          answer:"Ottawa"
       },
       {
          question:"Which instrument has 88 keys?",
          options:["Guitar","Piano","Violin","Flute"],
          answer:"Piano"
       },
       {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
      },
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
      },
      {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1944", "1950"],
        answer: "1945"
      },
      {
        question: "'Pride and Prejudice' was written by which author?",
        options: ["Charlotte Brontë", "Emily Dickinson", "Jane Austen", "Virginia Woolf"],
        answer: "Jane Austen"
      },
      {
        question: "'1984' is a novel by which author?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald"],
        answer: "George Orwell"
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale"
      },
      {
        question: "'The Great Gatsby' was written by which author?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
        answer: "F. Scott Fitzgerald"
      },
      {
        question: "'To Kill a Mockingbird' is set in which U.S. state?",
        options: ["Alabama", "Mississippi", "Georgia", "South Carolina"],
        answer: "Alabama"
      },
      {
        question: "'Moby Dick' was written by which author?",
        options: ["Herman Melville", "Jules Verne",  "Charles Dickens",  "Leo Tolstoy"],
        answer: "Herman Melville"
      },
      {
        question: "What is the smallest prime number?",
        options: ["0","1","2","3"],
        answer: "2"
      },
      {
        question: "Which element has the atomic number 1?",
        options: ["Helium","Hydrogen","Oxygen","Carbon"],
        answer: "Hydrogen"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold","Iron","Diamond","Platinum"],
        answer: "Diamond"
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the capital of Japan?",
        options: ["Tokyo","Seoul","Beijing","Bangkok"],
        answer: "Tokyo"
      },
      {
        question: "Which planet is known for its rings?",
        options: ["Earth","Mars","Saturn","Jupiter"],
        answer: "Saturn"
      },
       
       {
        question: "Which instrument has 88 keys?",
        options: ["Guitar", "Piano", "Violin", "Flute"],
        answer: "Piano"
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: "Michelangelo"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the main ingredient in bread?",
        options: ["Flour", "Sugar", "Salt", "Yeast"],
        answer: "Flour"
      },
      {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
      },
     
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
      },
      {
        question: "'The Great Gatsby' was written by which author?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain"],
        answer: "'F. Scott Fitzgerald'"
      },
      {
        question: "'Pride and Prejudice' was written by which author?",
        options: ["Charlotte Brontë",  "Jane Austen","Emily Dickinson","Virginia Woolf"],
         answer:"Jane Austen"
       },
       {
         question:"What is the freezing point of water in Celsius?",
         options:["0°C","32°F","100°C","212°F"],
         answer:"0°C"
       },
       {
         question:"Which planet is known for its rings?",
         options:["Earth","Mars","Saturn","Jupiter"],
         answer:"Saturn"
       },
       {
         question:"What is the capital of Italy?",
         options:["Venice","Rome","Florence","Milan"],
         answer:"Rome"
       },
       {
         question:"How many continents are there on Earth?",
         options:["5","6","7","8"],
         answer:"7"
       },
       {
         question:"Who discovered penicillin?",
         options:["Marie Curie","Alexander Fleming","Louis Pasteur","Isaac Newton"],
         answer:"Alexander Fleming"
       },
    
       
      
       
     
  
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="question-text">{questions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
